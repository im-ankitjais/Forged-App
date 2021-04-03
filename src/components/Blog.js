import React, { useContext, useEffect } from "react";
import "../assets/css/Blog.css";
import playButton from "../assets/images/play-button.svg";
import RightNav from "./RightNav";
import MiddleForm from "./MiddleForm";
import { GlobalContext } from "./../context/reducer";
import { useQuery, gql } from "@apollo/client";
import $ from "jquery";
import {Link} from "react-router-dom"
import Loader from "./Loader";
const FORGED_SPECIFIC_ARTICLE = gql`
	query post($id: ID) {
		post(where: { id: $id }) {
			content {
				html
			}
			title
			slug
			id
			excerpt
			coverImage {
				url
			}
			createdAt
			publishedAt
			publishedBy {
				name
			}
		}
	}
`;
const Blog = ({ match }) => {
	const { dispatch } = useContext(GlobalContext);
	const id = match.params.id;
	const { loading, error, data } = useQuery(FORGED_SPECIFIC_ARTICLE, {
		variables: { id },
	});
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		$(".blog_content  h1").addClass("blog_content_head");
		$(".blog_content  h2").addClass("blog_content_head");
		$(".blog_content  h3").addClass("blog_content_head");
		$(".blog_content  h4").addClass("blog_content_head");
		$(".blog_content  h5").addClass("blog_content_head");
		$(".blog_content  h6").addClass("blog_content_head");
		$(".blog_content  p").addClass("blog_content_para");
		$(".blog_content  figcaption").addClass("blog_content_figcaption");
		$(".blog_content  a").addClass("blog_content_para blog_content_link");
		$(".blog_content  blockquote").addClass("blog_content_quote");
		$(".blog_content  img").addClass("blog_content_img");
		$(".blog_content  ul").addClass("blog_content_ul");
	}, [data]);

	return (
		<div className='blog_contain'>
			<RightNav />
			<div className='blog_head'>
				<Link to="/">
					<img
						className='fa fa-arrow-down stl'
						src={playButton}
						alt='arrow'
					/>
					<span className='blog_category'>Home&nbsp;</span>
				</Link>
				<Link to="/news">
					<img
						className='fa fa-arrow-down stl'
						src={playButton}
						alt='arrow'
					/>
					<span className='blog_category'>News&nbsp;</span>
				</Link>
				{/* ))} */}
			</div>
			{data ? (
				<div className='blog'>
				<div className='title w-100'>
					<h1 className='blog_title'>{data.post.title}</h1>
					<p className='blog_excerpt'>{data.post.excerpt}</p>
					<span className='blog_start_effect'></span>
					<div className='blog_detail d-flex'>
						<p>
							<span>By&nbsp; Author</span>
						</p>
						<p>
							<span>Date:&nbsp;&nbsp; 12/12/12</span>
						</p>
					</div>
					<div className='blog_fea_img'>
						<div
							style={{ backgroundImage: `url(${data.post.coverImage.url})` }}
							className='collect_img background_size'></div>
					</div>
				</div>

				<div
					className='blog_content'
					dangerouslySetInnerHTML={{ __html: data.post.content.html }}></div>
			</div>
			):(
				<div className="newsLoading"><Loader /></div>
			)}
			<MiddleForm />
		</div>
		);
	} 

export default Blog;
