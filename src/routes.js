import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import TextColor from "./pages/Exercise/TextColor";
import Form from "./pages/Exercise/Form/Form";
import Project from "./pages/Exercise/Project/Project"

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history} />
    )
  },
  {
    path: "/txt-color",
    exact: false,
    main: () => <TextColor />
  },
  {
    path: "/form",
    exact: false,
    main: () => <Form />
  },
  {
    path: "/manage-work",
    exact: false,
    main: () => <Project />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
