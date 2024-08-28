import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { addToCartApi } from '../../APIS/cartApis'
import { toast } from 'react-toastify'

export default function Items({ele}) {


    let {status , mutate, data} = useMutation ({mutationFn:addToCartApi})
    
    

    if (status == 'success')
    toast.success(data?.data?.message)
        


    return (
        <div className='md:w-1/6 sm:w-1/2'>
            <div className="product p-2 cursor-pointer">
                <Link to={`/detailsproduct/${ele?._id}/${ele?.category._id}`}>
                    <img src={ele?.imageCover} alt="" />
                    <p className='text-green-700'>{ele?.category?.name}</p>
                    <p className='line-clamp-1'>{ele?.title}</p>
                    <div className='flex justify-between my-3'>
                        <span>{ele?.price} EGP</span>
                        <p> <i className='fas fa-star text-yellow-500'></i> {ele?.ratingsAverage}</p>
                    </div>
                </Link>
                <button onClick={() => {mutate(ele?._id)}} className='bg-green-700 text-white p-2 rounded btn'>Add to cart</button>
            </div>
        </div>
    )
}
