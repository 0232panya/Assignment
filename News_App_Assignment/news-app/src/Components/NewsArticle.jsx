
import React from 'react'
import ArticleCards from './ArticleCards'

const NewsArticle = ({ news, isLoading}) => {
  return (
    <div className='row container'>
        {
            isLoading ? <div className='spinner'> <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> 
                        </div>
                        :
                news.map((element, index) =>{
                    return (
                        <div key={index} className='col col-lg-3 col-sm-6'>
                            <ArticleCards url={element.urlToImage} title={element.title} description={element.description} moreurl={element.url} />
                        </div>
                    )
                })
        }
    </div>
  )
}

export default NewsArticle
