import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../app/styles/post.css';

const PostsPage = () => {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        // const data = axios
        //     .get('https://l1bloggers.vercel.app/posts?pageSize=6')
        //     .then((data) => {
        //         setPosts(data.data.items);
        //     });
    }, []);

    return (
        <div className="container_post_home">
            <h1>Posts</h1>
            <div className="content_post_input">
                <p>Sort:</p>
                <select className="input_post_choose">
                    <option value="new-posts">New posts first</option>
                    <option value="old-posts">Old posts first</option>
                </select>
            </div>

            <div className="content_main_post">
                {posts
                    ? posts.map((p: any) => (
                          <div key={p.id} className="content_post_list">
                              <h3>{p.title}</h3>
                              <p>{p.shortDescription}</p>
                              <p>{p.createdAt.slice(0, 10)}</p>
                          </div>
                      ))
                    : 'loading'}
            </div>
        </div>
    );
};

export default PostsPage;
