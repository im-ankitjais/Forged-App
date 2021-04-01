import React from 'react'
import BottomDetail from "./BottomDetail"
import {Link} from "react-router-dom"
import Navbar from "./Navbar"
import "../assets/css/article.css"
import DashboardNewsItem from './DashboardNewsItem'
import RightNav from './RightNav'
function Articles() {
    return (
        <div>
          <Navbar />
          <RightNav />

          <div className="row p-0 m-0">
          <div className="col-12 col-md-1 p-0 m-0"></div>
          <div className="col-12 col-md-11 p-0 m-0">
          <div className="top_head">
            <h1>TOP STORIES</h1>
            <p>Insights into the day’s biggest news.</p>
          </div>
            <div className="col-12 col-md-9 p-0 m-0">
                <TopArticle />
                <ArticleBox />
                <div className="item text-right">
            <Link to="/news/news"><button className="bottom_button">All News
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" className="svgBut" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
                
              </button></Link>
          </div> 
            </div>
            <div className="col-12 col-md-3"></div>
            <div className="main_content">
          <div className="collection_section">
          <div className="top_head">
            <h1>MORE NEWS</h1>
            </div>
            
          {/* {infiniteData.dataNews.map(item => ( */}
            <DashboardNewsItem />
          {/* ))} */}

              {/* {loadDisable?(
                <div className={loadDisable?"collection_section_load":"collection_section_load show_out_stock"}>
              <p>End of list</p>
            </div>
              ):(
            <div className="collection_section_load text-right">
            <button onClick={loadMoreInfinite} className="bottom_button">Load More</button>
            {infiniteData.isLoaded?(<div></div>):(
              <Loading />
            )}
            </div>  
              )} */}
              

          </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Articles

const TopArticle = () => {
    return  (
        <Link to="/blog">
          <div className="main_news">
            <div style={{backgroundImage:`url(https://pennystocks.today/wpi/wp-content/uploads/2021/03/LABOR-WORKERS.jpg)`}} className="top_img_div background_size">
            </div>
            <h3>LTNC, DD & the Reason Behind The Rise in Stock Price</h3>
            <p className="item_detail_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, esse cumque tempora odit saepe distinctio inventore iste id, quod repellat placeat illum vitae iusto exercitationem temporibus. Assumenda voluptatibus maxime reprehenderit.</p>     
            <BottomDetail item="" />
          </div>
        </Link>
    )
}

const ArticleBox = () => {
    return  (
        <Link to="">
          <div className="item d-flex">
            <div className="col-4 p-0">
              <div style={{backgroundImage:`url(https://pennystocks.today/wpi/wp-content/uploads/2021/03/LABOR-WORKERS.jpg)`}} className="item_img background_size">
              </div>
            </div>
            <div className="item_detail col-8">
              <h5 className="item_detail_head">LTNC, DD & the Reason Behind The Rise in Stock Price</h5>
              <p className="item_detail_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, esse cumque tempora odit saepe distinctio inventore iste id, quod repellat placeat illum vitae iusto exercitationem temporibus. Assumenda voluptatibus maxime reprehenderit.</p>     
              <BottomDetail />
            </div>
          </div>
        </Link>
    )
}