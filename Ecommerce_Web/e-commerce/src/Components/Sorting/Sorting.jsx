
import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './Sorting.css'

const Sorting = () => {

    const {sortBy, setSortBy} = useContext(ShopContext)

    const sortProduct = (e) =>{
        
        setSortBy(sortBy);
        console.log(sortBy)

    }

    useEffect(()=>{
        sortProduct()
    },[sortBy])

  return (
    <div className='sort-product'>    
        <select onChange={(e) => setSortBy(e.target.value)} className='sort-select'>
            <option value="">relevent</option>
            <option value="price&order=asc">Low to High</option>
            <option value="price&order=desc">High to Low</option>
            <option value="rating&order=desc">customer review</option>
            <option value="availabilityStatus">Newest</option>
            <option value="stock">Best Sellers</option>
        </select>
    </div>
  )
}

export default Sorting;
