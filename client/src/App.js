import { Route, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";




import NavBar from "./Components/navbar/NavBar";
import LandPage from "./pages/landPage/LandPage";
import ProfileStudent from "./pages/student/profile/Profile";
import ProfileProfessor from "./pages/professor/profile/Profile";
import SignInStudent from "./pages/student/signin/SignIn";
import SignInProfessor from "./pages/professor/signin/SignIn";
import SignUpStudent from "./pages/student/signup/SignUp";
import SignUpProfessor from "./pages/professor/signup/SignUp";
import Courses from './pages/courses/Courses'
import Add from './pages/add/Add'
import PrivateRoute from "./router/PrivateRoute";
import Errors from "./pages/errors/Errors";




import { currentStudent } from "./JS/actions/student";
import { currentProfessor } from "./JS/actions/professor";

import "./App.css";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentStudent());
  }, []);
  useEffect(() => {
    dispatch(currentProfessor());
  }, []);
  

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route exact path="/student/signin" component={SignInStudent} />
        <Route exact path="/professor/signin" component={SignInProfessor} />
        <Route exact path="/student/signup" component={SignUpStudent} />
        <Route exact path="/professor/signup" component={SignUpProfessor} />
        <Route exact path="/coursesList" component={Courses} />
        <PrivateRoute exact path={['/coursesList/add','/coursesList/edit']} component={Add} />
        <PrivateRoute exact path="/student/profile" component={ProfileStudent} />
        <PrivateRoute exact path="/professor/profile" component={ProfileProfessor} />
        <Route path="/*" component={Errors} />
      </Switch>
      
    </div>
  );
}

export default App;