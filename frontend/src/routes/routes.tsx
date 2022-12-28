import Basket from "../components/Basket";
import Category from "../components/Category";
import Main from "../components/Main";
import PhonePage from "../components/PhonePage";
import PowerBoxPage from "../components/PowerBoxPage";

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
    element: <Category />,
    submenu: [
      {
        id: 100,
        title: 'Phone',
        path: '/phone',

      },
      {
        id: 200,
        title: 'Power Box',
        path: '/power-box',
      },
    ]
  },
  {
    id: 3,
    path: '/basket',
    title: 'Basket',
    element: <Basket />
  },
  {
    id: 4,
    path: '/phone',
    element: <PhonePage />

  },
  {
    id: 5,
    path: '/power-box',
    element: <PowerBoxPage />
  }

]

export default routes