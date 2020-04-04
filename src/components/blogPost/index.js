import './style.css'
import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { useParams } from 'react-router-dom';

function BlogPost(props) {
    const [post, setPost] = useState({
        
            id: '1',
            blogCategory: "Featured",
            blogTitle : "Fitness Mantra To Live Fit Life",
            slug: "fitness-mantra-to-live-fit-life",
            postedOn: "July 21, 2016",
            author: "Faiz Khan",
            blogImage: "",
            blogText:""
    })
    const params =  useParams();
    
    const slug = params.slug;
    useEffect(()=>{ 
    const post = blogPost.data.find(post => post.slug==slug)
        setPost(post)
    },[post, params.slug]);
    console.log(post)
    if(post.blogImage=="") return null;

    return (
        
         <div className = "blogPostContainer">
            <Card>
                <div className = "blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>  
               <h1 className="postTitle">{post.blogTitle}</h1>
               <span className='postDetails'>{post.postedOn} by {post.author}</span>
                </div>        
                <div className='postImageContainer'>
                   <img src={require('../../images/'+ post.blogImage)} alt="post-image"/>
                </div>   
                <div className = "postContent">
                    <h2>{post.blogTitle}</h2>
                    <p>{post.blogText}</p>
                </div>   
           </Card>
         </div>
           
       
         
    );
} 

export default BlogPost;