import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
    const [blogs, setBlogs] = useState<any>([]);


    useEffect(() => {
        const data = axios
            .get('https://l1bloggers.vercel.app/blogs')
            .then((data) => {
                setBlogs(data.data.items);
            });
    }, []);


    return (
        <div>
            <>Page Blogs</>
            {blogs ?
                blogs.map((bl: any) => (
                    <div key={bl.id}>
                        <h1>{bl.name}</h1>
                        <a href='#' target='_blanc'>{bl.websiteUrl}</a>
                        <p>{bl.description}</p>
                    </div>
                )) : 'loading...................'}
        </div>
    );
};

export default Blogs;