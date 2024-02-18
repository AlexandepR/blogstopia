import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState<any>([]);
    const { t } = useTranslation<string>();

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
        fetchData(); // eslint-disable-line @typescript-eslint/no-floating-promises
        // console.log('START USE');
        // const data = axios
        //     .get('https://l1bloggers.vercel.app/blogs')
        //     .then((data) => {
        //         setBlogs(data.data.items);
        //     })
        //     .then(() => {
        // console.log('FINISH USE');
        //     });
    }, []);

    return (
        <div>
            <>{t('Блоги')}</>
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
