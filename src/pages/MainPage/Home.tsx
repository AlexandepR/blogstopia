import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import axios from 'axios';

export type BlogsTestType = Array<{
    [key: string]: {
        id: string,
        name: string,
        description: string,
        websiteUrl: string,
    }
}>
// const requestData = () => {
//     return axios
//         .get('https://l1bloggers.vercel.app/blogs')
//         .then(data => data);
//     // setBlog(data.data.items);
// }
const Home = () => {
    const [blog, setBlog] = useState<any>([]);

    useEffect(() => {
        axios
            .get('https://l1bloggers.vercel.app/blogs?pageSize=6')
            .then(data => {
                setBlog(data.data.items);
            });
    }, []);

    // const blogs = blog.map((obj:any,index:number) => (
    //     <span
    //         // key={obj[index].id}
    //     >{obj[index+1].name}</span>
    // ))
    return (
        // {blog ? '' : ''}
        <div className="container-home">
            <h1>Blogs</h1>
            <div className="content_title">
            <div className="content_input">
                <input type="text" className="input_search" placeholder="Search"/>
                <label htmlFor="my-select">Sort:</label>
                <select id="my-select" name="sort-list" className="input_choose">
                    <option value="new-blogs">New blogs first</option>
                    <option value="old-posts">Old blogs first</option>
                    <option value="from-a-to-z">From A to Z</option>
                    <option value="from-z-to-a">From Z to A</option>
                </select>
            </div>

            <div className="content-blogs">
                {/*{blog ? <h1>{blog[1]?.name}</h1> : ''}*/}
                {blog
                    ? blog.map((blog: any, i: number) => (
                        <div className='content_blog'>
                            <img src="" alt="Photo   "/>
                            <div className='content_blog_title' key={i}>
                                <h3>{blog.name}</h3>
                                <a href='#' target='_blanc'>Website: {blog.websiteUrl}</a>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    ))
                    : 'loading...................'}
            </div>
            </div>
            {/*<div className="content_items"></div>*/}
            {/*<Pagination/>*/}
        </div>
    );
};

export default Home;