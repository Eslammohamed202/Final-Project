import axios from "axios";



export async function getProduct () {
    try {
        let {data} = await axios.get ('https://ecommerce.routemisr.com/api/v1/products')
        return data
    } catch (error) {
        return error?.message
    }
}


export async function getProductWithCategories (categoryId) {
    try {
        let {data} = await axios.get (`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`)
        return data
    } catch (error) {
        error?.message
    }
}