import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./ProfileContainer/ProfileContainer";
import Fetching from "../../assets/Fetching/Fetching";
const LoginFormContainer = React.lazy(() =>
  import("../LoginForm/LoginFormContainer")
);
const ForumContainer = React.lazy(() => import("./Forum/ForumContainer"));
const MessagesContainer = React.lazy(() =>
  import("./Messages/MessagesContainer")
);

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path={"/profile/:userId?"} component={ProfileContainer} />
      <Route path='/friends' component={UsersContainer} />
      <Suspense fallback={<Fetching />}>
        <Route path='/forum' component={ForumContainer} />
        <Route path='/messages' component={MessagesContainer} />
        <Route path='/login' component={LoginFormContainer} />
      </Suspense>
    </Switch>
  );
};

export default Pages;
