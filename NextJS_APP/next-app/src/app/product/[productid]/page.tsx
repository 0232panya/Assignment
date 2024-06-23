
import React from 'react'

const ProductDetail = ( {params}:{params : {productid : string}} ) => {
  return (
    <div>
      Product Page Detail {params.productid}
      Nested Dynamic Route
    </div>
  )
}

export default ProductDetail
