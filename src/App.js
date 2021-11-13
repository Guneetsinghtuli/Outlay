import Dashboard from "./Components/Dashboard/Dashboard"
import Footer from "./Components/Footer/footer";
import Home from "./Components/home/main";
import Login from "./Components/login/login"
import Error from "./Components/404/404"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from "./Components/signup/signup";
import IntroCourse from "./Components/Introduction Course/IntroCourse";
import Pc from "./Components/Particular Couse/Pc";
import Pred from "./Components/prediction/Pred";
import Profile from "./Components/Profile/Profile";
import CourseOver from "./Components/course overview/CourseOver";
import Basic from "./Components/Basics/Basic";
import Spinner from "./Components/spinner/spinner";
// import alert_cont from "./Components/message/message";
import { Container, Alert} from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Switch>
      {/* Completely DOne */}
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        {/* Completely DOne */}
        <Route exact path="/login">
            <Login />
            <Footer />
          </Route>
          {/* ASK AGE */}
          <Route exact path="/signup">
            <Signup />
            <Footer />
          </Route>
          <Route exact path="/login/dashboard">
            <Dashboard />
            <Footer />
          </Route>
          {/* Completely */}
          <Route exact path="/login/prediction">
            <Pred />
            <Footer />
          </Route>
          {/* Small Changes */}
          <Route exact path="/login/profile">
            <Profile />
            <Footer />
          </Route>
          <Route exact path="/course-1-pg1">
            <IntroCourse />
            <Footer />
          </Route>
          <Route exact path="/spinner">
            <Spinner />
            <Footer />
          </Route>
          
          <Route exact path="/course-1-pg2">
            <Basic />
            <Footer />
          </Route>
          <Route exact path="/course-overview">
            <CourseOver />
            <Footer />
          </Route>
          {/* Small Changes */}
          <Route exact path="/course-info">
            <Pc />
            <Footer />
          </Route>
          <Route path="/404">
            <Error />
            <Footer />
          </Route>
          <Route exact path="/message">
            <Container>
                <Alert color="primary">HI! I am an Alert</Alert>
            </Container>
          </Route>
      </Switch>
    </Router>

    
  );
}

export default App;
