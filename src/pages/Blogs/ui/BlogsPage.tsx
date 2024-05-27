import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState<any>([]);
    console.log();
    // const fetchData = async () => {
    //     try {
    //         const res = await axios.get(`${__API__}/blogs`);
    //         setBlogs(res.data.items);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    useEffect(() => {
        // fetchData();
        // const data = axios
        //     .get(`${__API__}/blogs`)
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
                          <a href="#" target="_blanc">
                              {bl.websiteUrl}
                          </a>
                          <p>{bl.description}</p>
                      </div>
                  ))
                : 'loading...................'}
        </div>
    );
};
export default BlogsPage;
