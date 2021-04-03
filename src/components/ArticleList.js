import React,{useEffect,useContext} from 'react'
import BottomDetail from "./BottomDetail"
import {Link} from "react-router-dom"
import Navbar from "./Navbar"
import "../assets/css/article.css"
import DashboardNewsItem from './DashboardNewsItem'
import RightNav from './RightNav'
import { GlobalContext } from "./../context/reducer";
import { useQuery, gql } from "@apollo/client";
import Loader from './Loader'
const FORGED_ARTICLES = gql`
{
  posts{
    id
    slug
    excerpt
    title
    publishedAt
    coverImage {
      url
    }
  }
}
`;


function Articles() {
  const { dispatch } = useContext(GlobalContext);
	const { loading, error, data } = useQuery(FORGED_ARTICLES);
  useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
    return (
        <div>
          <Navbar />
          <RightNav />
          {data ? (
            <div className="row p-0 m-0">
          <div className="col-12 col-md-1 p-0 m-0"></div>
          <div className="col-12 col-md-11 p-0 m-0">
          <div className="top_head">
            <h1>TOP STORIES</h1>
            <p>Insights into the day’s biggest news.</p>
          </div>
            <div className="col-12 col-md-9 p-0 m-0">
                <TopArticle item={data.posts[0]} />
                <ArticleBox items={data.posts.slice(1,5)} />
                <div className="item text-right">
            <Link to="/news/news"><button className="bottom_button">All News
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" className="svgBut" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
                
              </button></Link>
          </div> 
            </div>
            <div className="col-12 col-md-3"></div>
            {data.posts.slice(2).length > 0 &&
            <div className="main_content">
          <div className="collection_section">
          <div className="top_head">
            <h1>MORE NEWS</h1>
            </div>
          <DashboardNewsItem moreItems={data.posts.slice(2)}  /> 
          </div>
        </div>
        }
        </div>
        </div>
          ):(
            <div className="newsLoading"><Loader /></div>
          )}
          
        </div>
  )
}


export default Articles

const TopArticle = (props) => {
    const {item} = props; 
    return  (
        <Link to={`/news/${item.id}`}>
          <div className="main_news">
            <div style={{backgroundImage:`url(${item.coverImage.url})`}} className="top_img_div background_size">
            </div>
            <h3>{item.title}</h3>
            <p className="item_detail_p">{item.excerpt}</p>     
            <BottomDetail item={item} />
          </div>
        </Link>
    )
}

const ArticleBox = (props) => {
  const {items} = props; 
    return  (
      <>
      {items.map(item => (
        <Link to={`/news/${item.id}`}>
          <div className="item d-flex">
            <div className="col-4 p-0">
              <div style={{backgroundImage:`url(${item.coverImage.url})`}} className="item_img background_size">
              </div>
            </div>
            <div className="item_detail col-8">
              <h5 className="item_detail_head">{item.title}</h5>
              <p className="item_detail_p">{item.excerpt}</p>     
              <BottomDetail item={item} />
            </div>
          </div>
        </Link>
      ))}
      </>
    )
}