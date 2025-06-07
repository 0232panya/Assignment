
import React, { useContext, useEffect, useRef, useState } from 'react';
import './NavBar.css'
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsList } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import LogIn from '../../Pages/LogIn/LogIn';
// 
import { getAuth, onAuthStateChanged } from 'firebase/auth';



const NavBar = () => {

    const { cart, product, filter } = useContext(ShopContext);

    const [visible,setVisible] = useState(false);
    const [input, setInput] = useState("");
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);

    const [popup, setPopup] = useState(false);

    const searchInput = useRef();

    const handleSearch = (e) =>{
        setInput(e.target.value);
    }

    const fetchUserDetails = async () =>{
        // ------- OLD CODE ----------
        auth.onAuthStateChanged(async(user) =>{
            console.log(user);
            const docRef = doc(db, 'Users' , user.uid);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setUserDetails(docSnap.data());
            }else{
                console.log("user is not logged in")
            }
        })

    }

    useEffect(() => {
        // ------- OLD CODE -------
        fetchUserDetails();
    },[]);

    const handleLogOut = async () =>{
        try{
            await auth.signOut();
            window.location.href = '/';
            console.log("user logged out successfully");
        }catch (error){
            // console.log("error.message")
        }
    }

  return (
    <div className='navbar'>
        <div className='Nav-left-sec'>
            <div className='logo-Sec'>
                <img src="/figma_img.png" className='Logo-img' alt='' />
            </div>
            <ul className='nav-menu'>
                <NavLink to={'/'} className=' flex flex-col items-center gap-1 text-decoration-none'>
                    <p className=' m-0 font-semibold text-gray-700'>Home</p>
                    <hr className='m-0 w-1/2 h-[1.5px] border-none bg-gray-900 hidden'/>
                </NavLink>
                <NavLink to={'/collection'} className='flex flex-col items-center gap-1 text-decoration-none'>
                    <p className='m-0 text-gray-700 font-semibold'>collection</p>
                    <hr className='m-0 w-1/2 h-[1.5px] border-none bg-gray-900 hidden'/>
                </NavLink>
                <NavLink to={'/about'} className=' flex flex-col items-center gap-1 text-decoration-none'>
                    <p className='m-0 font-semibold text-gray-700'>About</p>
                    <hr className='m-0 w-1/2 h-[1.5px] border-none bg-gray-900 hidden'/>
                </NavLink>
                <NavLink to={'/contact'} className=' flex flex-col items-center gap-1 text-decoration-none'>
                    <p className='m-0 font-semibold text-gray-700'>Contact</p>
                    <hr className='m-0 w-1/2 h-[1.5px] border-none bg-gray-900 hidden'/>
                </NavLink>
                {/* <NavLink to={'/'} className='menu-link'>Beauty</NavLink> */}
            </ul>
            {
                visible && <ul className='responsive-nav'>
                    <button onClick={() => setVisible(false)} className='flex m-[20px] text-[20px] font-[600]'><RxCross2 /> </button>
                    <div>
                    <NavLink to={'/'}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to={'/collection'}>
                        <p>Collection</p>
                    </NavLink>
                    <NavLink to={'./about'}>
                        <p>About</p>
                    </NavLink>
                    <NavLink to={'./contact'}>
                        <p>Contact</p>
                    </NavLink>
                    </div>
                </ul>
            }

        </div>
        <div className='nav-middle-Sec'>
            <form>
                <input type='text' placeholder='Search for a products,Brands and more '/>
                <button className='form-btn'><IoSearch className='search'/></button>
            </form>
            <div>
                {/* {
                    product.filter((item) => {
                        const searchTerm = input.toLowerCase();
                        const filter = item.goods_name.toLowerCase();

                        return searchTerm && filter.startWith(searchTerm);
                    }).map((i) =>{
                        <div onClick={() => setInput("")}><Link to={`${i.filter}`}>{i.filter}</Link></div>
                    })
                } */}
            </div>
        </div>

        <div className='nav-Right-Sec'>

            <Link to={'/checkout/cart'} className='cartItem'>
                <button><GrCart className='cart' /></button>
                <p className='cartItem-num'>{cart.length}</p>
            </Link>
            <Outlet />
            <button><IoMdHeartEmpty className='heart' /></button>

            <div className="dropdown dropdown-profile">
                <button className="btn profile-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <CgProfile className='profile' />
                </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {userDetails ?<div>
                            <li>Action</li>
                            <li>Another action</li>
                            <li onClick={handleLogOut}>Log out</li>
                        </div>:
                        <div>
                            {/* <Link to={'/login'}>Login</Link> */}
                            <button onClick={() => setPopup(true)}>Login</button>
                            
                        </div>
                        }
                    </ul>
            </div>
              {popup && <LogIn setPopUp={setPopup} />}
            <div className='flex justify-center align-center'>
                <button onClick={() => setVisible(true)} className='w-5 cursor-pointer resp-list'><BsList className='w-[22px] h-[22px]' /></button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
