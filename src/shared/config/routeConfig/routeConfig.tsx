import { RouteProps } from 'react-router';
import { HomePage } from 'src/pages/MainPage';
import { BlogsPage } from 'src/pages/Blogs';
import { PostsPage } from 'src/pages/Posts';
import { NotFoundPage } from 'src/pages/NotFound';


export enum AppRoutes {
    HOME = 'home',
    BLOGS = 'blogs',
    POSTS = 'posts',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.BLOGS]: '/blogs',
    [AppRoutes.POSTS]: '/posts',
    [AppRoutes.NOT_FOUND]: '*',
}

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
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}