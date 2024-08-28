import React, { useContext, useState } from 'react'
import logo from '../../assets/photo/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../../Context/AuthContext'
import useQueryCart from '../../Hooks/useQueryCart'
import { getCartApi } from '../../APIS/cartApis'

export default function Navbar() {

    let {isError, isLoading, data} = useQueryCart ('getcart', getCartApi)

    let navigate = useNavigate()

    let {isLogin , setIsLogin} = useContext (auth)
    const [open, setOpen] = useState(false)

    function toggle () {
        setOpen (!open)
    }


    function logout () {
        localStorage.removeItem('user token')
        setIsLogin (null)
        navigate ('/login')
    }

    return (
    <nav className='py-5 bg-main-light '>
        <div className="container md:px-0   px-4 md:flex justify-between items-center relative">
            <div className='md:flex gap-4'>
                <img src={logo} alt="fresh-cart-logo" width={130} />
                {isLogin ? <ul className={`md:flex gap-4  ${open ? 'block' : 'hidden'}`}>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/brand'}>Brand</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/products'}>Products</NavLink>
                    </li>
                </ul> : ''}

            </div>
            <div>
                <ul className={`md:flex gap-4 ${open ? 'block' : 'hidden'}`}>

                    {isLogin ?
                    <>
                        <li onClick={logout} className='cursor-pointer'>LogOut</li>
                        <li className='relative'>
                            <Link to={'/cart'}>
                                <i className='fas fa-cart-shopping '></i>
                            </Link>
                            <span className='w-[20px] h-[20px] absolute bottom-3 left-3 bg-green-700 rounded-full flex justify-center items-center text-white'>{data?.numOfCartItems}</span>
                        </li>
                        
                            {isLogin ? <span className='mx-3 font-bold text-green-600'><b>Hi {isLogin.name} </b></span> : ''}
                        
                    </>
                        :
                        <>
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                            <li><NavLink to={'/register'}>Register</NavLink></li>
                            <li className='flex gap-4'>
                                <a href="">  <i className='fab fa-facebook-f'></i></a>
                                <a href="">  <i className='fab fa-twitter'></i></a>
                                <a href="">  <i className='fab fa-google'></i></a>
                                <a href="">  <i className='fab fa-youtube'></i></a>
                            </li>
                        </>}

                </ul>
            </div>
            <i onClick={toggle} className={`lg:hidden  fas  fa-2x absolute top-0 right-4 cursor-pointer  ${open ? 'fa-close' : 'fa-bars'}`}></i>
        </div>
    </nav>
)
}