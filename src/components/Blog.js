import React from 'react'
import '../assets/css/Blog.css'
import singleLogo from '../assets/images/single-logo.png'
import playButton from '../assets/images/play-button.svg'
import RightNav from './RightNav';
import MiddleForm from './MiddleForm'

const Blog = ({match}) => {
  
// if(blogData.isLoaded){
    return(
        <div className="blog_contain">
            <RightNav />
            <div className="blog_head">
                <img className="blog_page_logo" src={singleLogo} alt="pennny stocks"/>
                {/* {categoriesName?.map(name => ( */}
                  <div>
                  <img className="fa fa-arrow-down stl" src={playButton} alt="arrow" />
                  <span className="blog_category">Name&nbsp;</span>
                  </div>
                        
                    {/* ))} */}
            </div>
            <div className="blog">
            <div className="title w-100">
                <h1 className="blog_title">LTNC, DD & the Reason Behind The Rise in Stock Price</h1>
                <p className="blog_excerpt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam, placeat quod nisi explicabo ipsa aut adipisci ut nesciunt est? Voluptatum perferendis commodi blanditiis non fugit, ut quidem incidunt sapiente!</p>
                <span className="blog_start_effect"></span>
                <div className="blog_detail d-flex">
                    <p>
                      <span>By&nbsp; Author</span>
                    </p>
                    <p>
                      <span>Date:&nbsp;&nbsp; 12/12/12</span>
                    </p>
                </div>
                <div className="blog_fea_img">
                  <div style={{backgroundImage:`url(https://pennystocks.today/wpi/wp-content/uploads/2021/03/LABOR-WORKERS.jpg)`}} className="collect_img background_size">
                  </div>
                </div>
            </div>

            <div className="blog_content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus illum atque soluta corporis vitae, porro recusandae accusantium nostrum doloremque deserunt accusamus amet sapiente ipsum aut odio saepe ullam voluptatem? Accusamus?
            </div>
          </div>
          <MiddleForm />
        </div>
    )
}
{/* else{
    return(
         <Loading />
    )
} */}
{/* } */}

export default Blog;