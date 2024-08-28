import axios from "axios"



let baseUrl = `https://ecommerce.routemisr.com/api/v1`
let token = localStorage.getItem('userToken')

export function addToCartApi (productId) {
    return axios.post(`${baseUrl}/cart`, { productId }, 
        {
            headers:{
                token
            }
        }
    )
}


///// get Cart

export function getCartApi () {
    return axios.get(`${baseUrl}/cart`, {
        headers: {
            token
        }
    })
}




///// dalate Cart

export function deleteCartApi (id) {
    return axios.delete (`${baseUrl}/cart/${id}`, 
        {headers:{
            token
        }}
    )
}



/// Update Cart

export default function updateCartApi ({id, count}) {
    return axios.put (`${baseUrl}/cart/${id}`, {count}, {
        headers: {
            token
        }
    })
}




/// Update Cart

export function clearCartApi () {
    return axios.delete (`${baseUrl}/cart`, {
        headers: {
            token
        }
    })
}