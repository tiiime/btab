import PageIndex from './pages/Index';
import Item from './pages/Item';

export default [
  {
    path: '/',
    component: PageIndex,
  },
  {
    path: '/item/:id',
    component: Item,
  }
];
