// import { useQuery } from "@tanstack/react-query";
// import axios from "axios"
// import { useEffect } from "react";


// export default function Brand() {

//   function getBrands () {
//     return axios.get ('https://ecommerce.routemisr.com/api/v1/brands')
//   }
  
//   let {isLoading , isError , error , data} = useQuery ({queryKey:['getbrands'], queryFn:getBrands,
//     refetchOnWindowFocus: false,
//     // gcTime: 5000,
//     // staleTime: 3000,                    الداتا القديمه حافظ عليها
//   })
//   console.log(isLoading);
//   console.log(isError)
//   console.log(data)
  

//   return (
//     <div>
      
//     </div>
//   )
// }









import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loading from "../Loading/Loading"

export default function Brand() {

  function getBrands () {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  let {error, isLoading, isError, data} = useQuery({queryKey:['getBrands'], queryFn:getBrands, refetchOnWindowFocus: false})
  
  // console.log(data?.data);
  
  if (isLoading)
    return <Loading></Loading>

  if (isError)
    return <h2 className="text-2xl text-red-500">{error.message}</h2>


  return (
    <div className="row">
      {data?.data?.data.map(ele => <div key={ele?._id} className="md:w-1/4">
          <div className="p-4">
            <img src={ele?.image} alt="" />
            <p className="text-center">{ele?.name}</p>
          </div>
      </div>)}
    </div>
  )
}











