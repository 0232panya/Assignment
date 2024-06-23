
import React from 'react'

const Pagination = ({ page, setPage, totalPage}) => {
  return (
    <div className='pagination-box'>
        <ul className="pagination">
                        
          {page > 1 && 
              <li className="page-item">
                  <p style={{margin: "0"}}  onClick={() => setPage(page -1)}>&laquo;</p>
          </li>
          }
                        
          <li className="page-item" onClick={() => setPage(1)}>1</li>
          <li className="page-item" onClick={() => setPage(2)}>2</li>
          <li className="page-item" onClick={() => setPage(3)}>3</li>
          {page < totalPage && 
                           
              <li className="page-item">
                  <p style={{margin: "0"}}  onClick={() => setPage(page + 1)}>&raquo;</p>
              </li>
                            
          }
        </ul>
    </div>
  )
}

export default Pagination
