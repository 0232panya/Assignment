
import React from 'react'

const ArticleCards = ({url, title, description, moreurl}) => {
  return (
    <div className='artical-Card'>
        <div className='artical-img'>
          <img src={url?url:"https://www.quantumbalancing.com/images/News2.gif"} alt='' />  
        </div>  
        <div className='artical-info'>
          <p className='card-title'>{title.slice(0,50)}...</p>
          <p className='description'>{description?description.slice(0,90):"No Description"}...</p>
        </div>    
        <div className='artical-button'>
          <button><a href={moreurl}>read more...</a></button>
        </div>
    </div>
  )
}

export default ArticleCards
