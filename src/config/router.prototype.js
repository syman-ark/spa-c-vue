import Content from '../component/Content';
import WelcomePage from '../component/WelcomePage';
import Login from '../component/Login';

const routes = [
  {
    path: '/',
    component: Content,
    children: [
      {
        path: '/',
        component: WelcomePage
      }, {
        path: '/PageOne',
        component: () => import(
          '../component/PageOne'
        ),
      }, {
        path: '/PageTwo',
        component: () => import(
          '../component/PageTwo'
          ),
      }]
  },
  {
    path: '/login',
    component: Login
  },
];
export default routes;
