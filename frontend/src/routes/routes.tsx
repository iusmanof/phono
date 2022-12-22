import Basket from "../components/Basket";
import Category from "../components/Category";
import Main from "../components/Main";

const routes = [
  {
    id: 1,
    path: '/',
    title: 'Main',
    element: <Main />
  },
  {
    id: 2,
    path: '/category',
    title: 'Category',
    element: <Category />
  },
  {
    id: 1,
    path: '/basket',
    title: 'Basket',
    element: <Basket />
  }
]

export default routes