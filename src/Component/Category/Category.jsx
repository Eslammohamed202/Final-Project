import { useEffect, useState } from 'react'
import { getCategory } from '../../APIS/getCategory'
import Slider from 'react-slick';

export default function Category() {

    var settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        autoplay: true
    };

    const [categoriesArr, setCategoriesArr] = useState([])
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')

    async function getCategoriesapi () {
        setLoading(true)
        let data = await getCategory()
        if (data?.data) {
            setCategoriesArr (data?.data)
            setMsg('')
            setLoading(false)
        } else {
            setMsg(data)
            setLoading(false)
        }
    }

    useEffect (()=>{
        getCategoriesapi()
    }, [])

    


    return (
    <div className='my-5'>
        <Slider {...settings}>
            {categoriesArr.map(ele=><img className='h-[150px]' style={{objectFit:'cover'}} key={ele?._id} src={ele?.image}></img>)}
        </Slider>
    </div>
    )
}

