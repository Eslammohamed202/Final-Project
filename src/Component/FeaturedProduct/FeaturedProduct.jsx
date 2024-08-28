import { useEffect, useState } from 'react'
import { getProduct } from '../../APIS/getProduct'
import Loading from '../Loading/Loading'
import Items from '../Items/Items'

export default function FeaturedProduct({ arr }) {
    
    const [productArr, setProductArr] = useState([])
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')

    async function getProductapi () {
        setLoading(true)
        let data = await getProduct()
        if (data?.data) {
            setProductArr (data?.data)
            setMsg('')
            setLoading(false)
        } else {
            setMsg(data)
            setLoading(false)
        }
    }

    useEffect (() => {
        getProductapi ()
    },[])

    if (loading) {
        return <Loading></Loading>
    }

    if (msg) {
        return <h2 className='font-bold text-red-700 my-3'>{msg}</h2>
    }

    return (
        <div className='row'>
            {arr?.length ? arr.map(prod => <Items key={prod?._id} ele={prod}></Items>):
            productArr.map(prod => <Items key={prod?.id} ele={prod} ></Items>)}
        </div>
    )
}
