import { useEffect, useState } from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import { getCategories } from "../../APIS/getCategories";
import { getProductWithCategories } from "../../APIS/getProduct";

export default function Product() {

  const [CategoriesArr, setCategoriesArr] = useState([])
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [arr, setArr] = useState([])

  async function getCategoriesApi () {
    setLoading (true)
    let data  = await getCategories()
    if (data?.data) {
      setCategoriesArr (data?.data)
      setMsg('')
      setLoading(false)
    } else {
      setLoading (false)
      setMsg (data)
    }
  }

  async function getData (id) {
    let data = await getProductWithCategories (id)
    setArr (data?.data)
  }


  useEffect (() => {
    getCategoriesApi ()
  } , [])

  return (
    <div className="flex ">

      <ul className="my-10 border-r-2 border-gray-300">
        {CategoriesArr?.map(ele => <li onClick={() => getData(ele?._id)} key={ele?._id} 
        className="hover:underline cursor-pointer py-4">{ele?.name}</li>)}
      </ul>

      <FeaturedProduct arr={arr}/>
    </div>
  )
}
