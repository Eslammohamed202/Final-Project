import { useEffect, useState } from "react"
import { getspecificproduct } from "../../APIS/getspecificproduct"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import { getProductWithCategories } from "../../APIS/getProduct";
import Items from "../Items/Items";
import Loading from "../Loading/Loading";
import { useMutation } from "@tanstack/react-query";
import { addToCartApi } from "../../APIS/cartApis";
import { toast } from "react-toastify";


export default function DetailsProducts() {



  let {status , mutate, data} = useMutation ({mutationFn:addToCartApi})
    
  if (status == 'success')
      console.log('success')


  if (status == 'error')
      console.log('error')

  if (status == 'success')
  toast.success(data?.data?.message)


  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [product, setProduct] = useState({})
  const [imgSrc, setImgSrc] = useState('')
  const [relatedProduct, setRelatedProduct] = useState([])


  let {id , categoryId} = useParams ()

  async function getspecificproductApi () {
    setLoading (true)
    let data = await getspecificproduct (id)
    if (data?.data) {
      setProduct (data?.data?.data)
      setLoading (false)
      setMsg ('')
    } else {
      setLoading (false)
      setMsg (data)
    }
  }


  async function getProductWithCategoriesApi () {
    setLoading (true)
    let data = await getProductWithCategories (categoryId)
    if (data?.data) {
      setRelatedProduct (data?.data)
      setLoading (false)
      setMsg ('')
    } else {
      setLoading (false)
      setMsg (data)
    }
  }


  function changesrc (e) {
    setImgSrc (e.target.src)
  }


  useEffect(() => {
    getProductWithCategoriesApi ()
  }, [])


  useEffect (() => {
    getspecificproductApi()
  } , [id])

  if (loading) {
    return <Loading></Loading>
  }

  if (msg) {
    return <h2>{msg}</h2>
  }

  return (
    <div className="row items-center sm:gap-0 gap-10">
      <div className="sm:w-1/3">
        <img src={imgSrc?imgSrc:product?.imageCover} className="w-full" alt="" />
        <ul className="flex justify-center my-3">
          {product?.images?.map(img => <li key={img}> <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} 
          onClick={changesrc} src={img} className="w-[80px] cursor-pointer" alt="" /> </li>)}
        </ul>
      </div>
      <div className="sm:w-2/3">
        <p className='text-green-700'>{product?.category?.name}</p>
        <p className='line-clamp-1'>{product?.title}</p>
        <p>{product?.description}</p>
        <div className='flex justify-between my-3'>
          <span>{product?.price} EGP</span>
          <p> <i className='fas fa-star text-yellow-500'></i> {product?.ratingsAverage}</p>
        </div>                
        <button onClick={()=>{mutate(product?._id)}} className='bg-green-700 w-full text-white p-1 rounded block my-5'>Add to cart</button>
      </div>

      {relatedProduct?.map(prod => <Items ele={prod} key={prod._id}></Items>)}
    </div>
  )
}
