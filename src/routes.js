import App from './App.js';
import Home from './Home.js';
import Foo from './Foo.js';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'foo', component: Foo },
  ]
};

export default routes
