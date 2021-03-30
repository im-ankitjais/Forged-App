import React from 'react'
import BottomDetail from "./BottomDetail"
function Articles() {
    return (
        <div>
            <div className="col-12 col-md-9">
                <TopArticle />
                <ArticleBox />
            </div>
            <div className="col-12 col-md-3"></div>
        </div>
    )
}

export default Articles

const TopArticle = () => {
    return  (
        <Link to={`/blog/${id}`}>
          <div className="main_news">
            <div style={{backgroundImage:`url(${fetchData.imgUrl})`}} className="top_img_div background_size">
            </div>
            <h3>{item.title.rendered}</h3>
            <BottomDetail item={item} />
          </div>
        </Link>
    )
}

const ArticleBox = () => {
    return  (
        <Link to={`/blog/${id}`}>
        <div className="item d-flex">
              <div className="col-4 p-0">
                <div style={{backgroundImage:`url(${fetchData.imgUrl})`}} className="item_img background_size">
                </div>
              </div>
              <div className="item_detail col-8">
                <h5 className="item_detail_head" dangerouslySetInnerHTML={{__html:item.title.rendered}}></h5>
                <p className="item_detail_p" dangerouslySetInnerHTML={{__html:item.excerpt.rendered}}></p>     
               
                <BottomDetail item={item} />

              </div>
            </div>
            </Link>
    )
}