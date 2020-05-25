import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import PrivateRoute from '../../routing/PrivateRoute';
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../views/Profile/actions/index";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const DefaultLayout=(props)=>{
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  const userData = useSelector((state) => state.loggedUser);

  if(userData.user===null){
    props.history.push('/login');
  }
  // const token = userData.user.token;
  const dispatch = useDispatch();
  console.log("@@@@@@@@user@@@@@@@@@",userData);
  const logOut = (e) => {
    e.preventDefault()
   console.log("calling signout function");
   dispatch(signOut());
   localStorage.removeItem("token");
   console.log("logout is calling")
   props.history.push('/login')
 };

 return (
    <div className="app">
      <AppHeader fixed style={{backgroundColor:"#20a8d8"}}>
        <Suspense  fallback={loading()}>
          <DefaultHeader onLogout={e=>logOut(e)}/>
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
          <AppSidebarNav navConfig={navigation} {...props} router={router}/>
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppBreadcrumb appRoutes={routes} router={router}/>
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </Container>
        </main>
        <AppAside fixed>
          <Suspense fallback={loading()}>
            <DefaultAside />
          </Suspense>
        </AppAside>
      </div>
      <AppFooter style={{backgroundColor:"#20a8d8"}}>
        <Suspense fallback={loading()}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>
    </div>
  );
}


export default DefaultLayout;
