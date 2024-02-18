import type { RouteProps } from 'react-router';
import { HomePage } from 'pages/MainPage';
import { BlogsPage } from 'pages/Blogs';
import { PostsPage } from 'pages/Posts';
import React from 'react';
import { NotFoundPage } from 'pages/NotFound';
import TestPage from 'pages/Test/components/form';

export enum AppRoutes {
    HOME = 'home',
    BLOGS = 'blogs',
    POSTS = 'posts',
    TEST_PAGE = 'test',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.BLOGS]: '/blogs',
    [AppRoutes.POSTS]: '/posts',
    [AppRoutes.TEST_PAGE]: '/test',
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRoutes.BLOGS]: {
        path: RoutePath.blogs,
        element: <BlogsPage />
    },
    [AppRoutes.POSTS]: {
        path: RoutePath.posts,
        element: <PostsPage />
    },
    [AppRoutes.TEST_PAGE]: {
        path: RoutePath.test,
        element: <TestPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
