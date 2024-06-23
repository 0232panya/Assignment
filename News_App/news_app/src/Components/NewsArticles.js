
import React from 'react'
import ArticleCard from './ArticleCard'

const NewsArticles = ({news, isLoading}) => {
  return (
    <div className='row container'>
      {
        isLoading ? <div className="spinner-border spinner" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :
        news.map((article,index)=>(
            <div key={index} className='col-4'>
                <ArticleCard url={article.urlToImage} title={article.title} description={article.description} moreurl={article.url} />
            </div>
        ))
      }
    </div>
  )
}

export default NewsArticles
