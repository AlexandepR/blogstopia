import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState<any>([]);

    const fetchData = async () => {
        try {
            const res = await axios
                .get('https://l1bloggers.vercel.app/blogs');
            setBlogs(res.data.items);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
        // const data = axios
        //     .get('https://l1bloggers.vercel.app/blogs')
        // .then((data) => {
        //     setBlogs(data.data.items);
        // });
        // setBlogs(data.data.items);
    }, []);

    return (
        <div>
            <>Page Blogs</>
            {blogs
                ? blogs.map((bl: any) => (
                    <div key={bl.id}>
                        <h1>{bl.name}</h1>
                        <a href='#' target='_blanc'>{bl.websiteUrl}</a>
                        <p>{bl.description}</p>
                    </div>
                ))
                : 'loading...................'}
        </div>
    );
};

export default BlogsPage;
