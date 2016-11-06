import Wrapper from './components/Wrapper/Wrapper.js';
import Home from './containers/Home.js';
import Foo from './components/Foo/Foo.js';

const routes = {
  path: '/',
  component: Wrapper,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'foo', component: Foo },
  ]
};

export default routes;
