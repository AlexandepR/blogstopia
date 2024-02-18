import { lazy } from 'react';

export const BlogPageAsync = lazy(async () => await import('./BlogsPage'));
