import Foo from "./components/Foo/Foo.js";
import Home from "./containers/Home.js";
import Wrapper from "./components/Wrapper/Wrapper.js";

const routes = {
  childRoutes: [
    {
      component: Foo,
      path: "foo",
    },
  ],
  component: Wrapper,
  indexRoute: { component: Home },
  path: "/",
};

export default routes;
