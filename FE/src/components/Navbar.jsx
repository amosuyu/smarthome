import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart,AiFillInstagram, AiFillYoutube, AiFillFacebook, AiOutlineClose, AiFillTwitterCircle,} from 'react-icons/ai'
import { Link } from 'react-router-dom';

import logo from '../asssets/logo.png';

const nav = [
    {
        display : "Home",
        path : "/"
    },
    {
        display : "Product",
        path : "/product"
    },
    {
        display : "Contact Us",
        path : "/contact"
    },
    {
        display : "Blog",
        path : "/Blog"
    },
    {
        display : "Login",
        path : "/login"
    },
]

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
        console.log(open)
    }
  return (
    <div className='h-16 flex justify-between md:justify-between items-center border-b-2 px-2 w-[500px] md:w-full  sticky'>
        <div className="text-[25px]">
            {
                !open ? (
                    <AiOutlineMenu className='text-[#1e2d7d] text-2xl md:pl-3 md:text-4xl md:cursor-pointer  ' onClick={showMenu} />
                ) : (
                    <AiOutlineClose className='text-[#1e2d7d] text-2xl md:pl-3 md:text-4xl md:cursor-pointer' onClick={showMenu} />
                ) 
            }
            {
                open && (
                    <div className=" absolute top-16 bg-white w-full  h-28   md:w-1/2  ">
                        {
                            nav.map((item, index) => (
                                <ul className=" w-full  flex justify-center items-center md:w-full md:text-center md:boder-r-2  ">
                                    <li className="py-7 text-base hover:text-[#1e2d7d] transition-all font-semibold 
                                      md:w-full md:hover:border-b-2 md:font-bold md:text-lg">
                                        <Link to={item.path}>{item.display}</Link>
                                    </li>
                                </ul>
                            ))
                        }
                        <div className="flex justify-evenly items-center mt-[60px] text-3xl hover:text-[#1e2d7d] cursor-pointer transition-all ">
                            <Link to="/"><AiFillTwitterCircle className='' /></Link>
                            <Link to="/"><AiFillInstagram /></Link>
                            <Link to="/"><AiFillFacebook /></Link>
                            <Link to="/"><AiFillYoutube /></Link>
                        </div>
                       
                    </div>
                )
            }
        
        </div>
        <div className="w-[150px] h-[22px] md:w-[255px] md:h-[38px] md:translate-x-[100px]">
            <img src={logo} alt="" className='object-cover' />
        </div>
        <div className="flex items-center gap-4 md:gap-16 px-3">
                <AiOutlineSearch  className='text-xl text-[#1e2d7d] md:text-3xl md:cursor-pointer  '/>
                <Link to='/login'><AiOutlineUser  className='text-2xl text-[#1e2d7d] md:hover:shadow-lg md:text-3xl'/></Link>
                <Link to='/cart'><AiOutlineShoppingCart className='text-2xl text-[#1e2d7d]  md:hover:shadow-lg md:text-3xl'/></Link>
        </div>
        

    </div>
  )
}

export default Navbar