import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Flowing from '~/pages/Flowing';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
export const publicRoutes = [
    { path: '/', components: Home },
    { path: '/flowing', components: Flowing },
    { path: '/upload', components: Upload, layout: HeaderOnly },
    { path: '/search', components: Search, layout: null },
];
export const privateRoutes = [];
