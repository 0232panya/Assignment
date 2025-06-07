
import React, { useContext, useState } from 'react';
import './collection.css';
import { Link } from 'react-router-dom';

import { ShopContext } from '../../Context/ShopContext';
import Cards from '../../Components/Cards/Cards';
import Sorting from '../../Components/Sorting/Sorting';

const Collection = () => {

  const {category, handleCatClick, isLoading, selectedCategory, collectionProduct, currentPage, productsPerPage, handleNextPage, handlePrevPage} =useContext(ShopContext)

  return (
    <div className='collection'>
      <div className='collection-cat'>
          <div className='all-cat'>
              {
                category.map((category,i) =>{
                  return (
                    <button key={i} onClick={() => handleCatClick(category.slug)}>
                      {category.name}
                    </button>
                  )
                })
              }
          </div>
      </div>
      <div className='collection-product'>
            <div className='products'>
              <div className='sorting-product'>
                <Sorting />
              </div>
              {
                !isLoading && selectedCategory && collectionProduct.length > 0 ? (
                  <div >
                    <div className='item-products'>
                    {
                      collectionProduct.map(i =>{
                        return (
                          <div key={i.id}>
                            <Cards i={i} />
                          </div>
                        )
                      })
                    }
                    </div>
                  </div>
                ):<div>loading...</div>
              }

              {/* ------ PAGINATION ------- */}
             {collectionProduct.length < productsPerPage ? "" : <div className='pagination'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>&larr; </button>
                <span> Page {currentPage}</span>
                
                <button onClick={handleNextPage} disabled={collectionProduct.length < productsPerPage} >&rarr;</button>
              </div>}
            </div>
      </div>
    </div>
  )
}

export default Collection
