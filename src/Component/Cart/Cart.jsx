import Loading from "../Loading/Loading"
import updateCartApi, { clearCartApi, deleteCartApi, getCartApi } from "../../APIS/cartApis"
import useQueryCart from "../../Hooks/useQueryCart"
import useMutationCart from "../../Hooks/useMutationCart"
import BasicModal from "../BasicModal/BasicModal"

export default function Cart() {


  let {isError, isLoading, data, error}  = useQueryCart  ('getcart', getCartApi)

  let {mutate:delmutate} = useMutationCart (deleteCartApi)

  let {mutate:updatemutate} = useMutationCart (updateCartApi) 
    
  let {mutate:clearmutate} = useMutationCart (clearCartApi)
  

  if (isLoading) {
    return <Loading></Loading>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }


  return (
  <>
      <div className="my-4">
        <button onClick={()=>{clearmutate()}} className="bg-red-700 text-white p-3 rounded">clear cart</button>
        <h1 className="my-3 fa-1xl">Cart Item <span className="font-medium text-green-700">{data?.numOfCartItems}</span> </h1>
        <h1 className="my-3 fa-1xl">Cart Item <span className="font-medium text-green-700">{data?.data?.totalCartPrice} EGP</span> </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-8">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Qty</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Action <i className='fas fa-trash text-red-700'></i></th>
              </tr>
              </thead>
              <tbody>
                {data?.data?.products.map((ele) => <tr key={ele?.product?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <img src={ele?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{ele?.product?.title}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button onClick={()=>{
                      {ele?.count==1?delmutate(ele?.product?._id):
                        updatemutate({id:ele?.product?._id, count:ele?.count?ele?.count-1:ele.count})}}}
                    className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                      <span className="sr-only">Quantity button</span>
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                      </svg>
                    </button>
                    <div> 
                      <span>{ele?.count}</span>
                    </div>
                    <button onClick={()=>{updatemutate({id:ele?.product?._id, count:ele?.count+1})}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {ele?.price} EGP
                </td>
                <td className="px-6 py-4">
                  <button onClick={()=>{delmutate(ele?.product?._id)}} className="font-medium text-red-600 dark:text-red-500 bg-gray-100 p-3 rounded">Remove</button>
                </td>
              </tr>)}
              </tbody>
          </table>
        </div>
   
        <BasicModal cartId={data?.data?._id}/>

        



  </div> 
  </>   
  )
}






























// import { useRef } from "react"

// export default function Brand() {

//   let refHome = useRef (null)
//   let refAbout = useRef (null)
//   let refContact = useRef (null)

//   function handleHome () {
//     refHome.current.scrollIntoView ({behavior: 'smooth'})
//   }

//   function handleAbout () {
//     refAbout.current.scrollIntoView ({behavior: 'smooth'})
//   }

//   function handleContact () {
//     refContact.current.scrollIntoView ({behavior: 'smooth'})
//   }

//   return (
//     <div>
//       <p onClick={handleHome}>Home</p>
//       <p onClick={handleAbout}>About</p>
//       <p onClick={handleContact}>Contact</p>
//       <section ref={refHome} className="bg-red-400 h-[80vh]">Home</section>
//       <section ref={refAbout} className="bg-green-400 h-[80vh]">About</section>
//       <section ref={refContact} className="bg-blue-400 h-[80vh]">Contact</section>
//     </div>
//   )
// }



//// reactjs scroll to component       =>        important search hooks (forwardRef)






