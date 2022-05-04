import React from "react";
import { Route } from "react-router-dom";
// import { Auth } from "../page/authorization/Auth";
import { Questions } from "../page/authorization/quetions/Questions";

import constants from "../constants";
import { Password } from "../page/authorization/password/Password";

const routes = [
  // {
  //   path: `${constants.Homepage}/auth`,
  //   component: Auth,
  //   key: "/Auth",
  // },
  // {
  //   path: `${constants.Homepage}/`,
  //   component: Password,
  //   key: "/Password111",
  // },
  {
    path: `${constants.Homepage}/password`,
    component: Password,
    key: "/Password",
  },
  {
    path: `${constants.Homepage}/questions`,
    component: Questions,
    key: "/Questions",
  },
];

const RoutingList = () => {
  // return <DetailsPrintPage />
  return routes.map((item) => {
    if (item.path.split(`${constants.Homepage}/`).length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }

    return <Route path={item.path} component={item.component} key={item.key} />;
  });
};

export default RoutingList;
