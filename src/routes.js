import App from './App/App.js';
import Home from './Home/Home.js';
import Foo from './Foo/Foo.js';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'foo', component: Foo },
  ]
};

export default routes;
