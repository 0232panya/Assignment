
import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import Cards from '../../Components/Cards/Cards';
import { ShopContext } from '../../Context/ShopContext';
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Sorting from '../../Components/Sorting/Sorting';

const Home = () => {

    const {product, filter, setFilter,setSortBy,category ,setProduct, isLoading, sortBy} = useContext(ShopContext)

    const [loadMore, setLoadmore] = useState(8);

    const handleLoadMore = () =>{

        setLoadmore((prev) => prev + 4);
    }


    // const sortProduct = (e) =>{
        
    //     setSortBy(sortBy);
    //     console.log(sortBy)

    // }

    // useEffect(()=>{
    //     sortProduct()
    // },[sortBy])
    
  return (
    <div className='Home'>
                <div>

                </div>
                <div className='banner-img-sec'>
                    <img src='https://www.topsandbottomsusa.com/cdn/shop/files/collection_womens_banner.webp?v=1721160799&width=2000' alt='' className='banner-img' />
                </div>
                <div className='policy'>
                    <div>
                        <IoMdCheckmarkCircleOutline className='policy-icons' />
                        <p>100% Original Products </p>
                    </div>
                    <div>
                        <LiaShippingFastSolid className='policy-icons' />
                        <p>Free Shipping</p>
                    </div>
                    <div>
                        <HiOutlineCurrencyRupee className='policy-icons' />
                        <p>Easy Return or Refund</p>
                    </div>
                </div>
                <div className='products-details'>
                    <div className='sorting'>
                        <Sorting />
                    </div>

                    <div className='item-cards'>
                       {
                        isLoading ? <div>Loading</div> :
                         <div className='item-cards'>{
                            product.slice(0,loadMore).map((i)=>{
                                return(
                                    <div key={i.id}>
                                        <Cards i={i} />
                                    </div>
                            )
                            })
                        }
                        </div> }
                    </div>
                    <button className='load-more' onClick={handleLoadMore}>Load more</button>
                </div>        
    </div>
  )
}

export default Home
