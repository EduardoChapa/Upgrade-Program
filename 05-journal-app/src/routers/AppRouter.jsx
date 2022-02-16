import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoutes';
import { PrivateRoute } from './PrivateRoutes';
import { startLoadingNotes } from '../actions/notes';

function AppRouter() {

  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else
        setIsLoggedIn(false);
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (
      <h1>Please wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            path="/auth"
            component={ AuthRouter }
            isAuthenticated={ isLoggedIn }
          />
          <PrivateRoute 
            exact
            isAuthenticated={ isLoggedIn }
            path="/"
            component={ JournalScreen }
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;