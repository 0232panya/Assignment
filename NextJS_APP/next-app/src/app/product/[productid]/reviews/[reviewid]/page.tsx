
import React from 'react'

const ReviewDetail = ( {params} : {
    params : {
        productid : string;
        reviewid : string;
    }
} ) => {
  return (
    <div>
        Review {params.reviewid} for product {params.productid};
        This is Nested Dynamic Route;
    </div>
  )
}

export default ReviewDetail;
