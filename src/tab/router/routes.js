import PageIndex from './pages/Index';
import List from './pages/List';

export default [
  {
    path: '/',
    component: PageIndex,
  },
  {
    path: '/item/:id',
    component: List,
  }
];
