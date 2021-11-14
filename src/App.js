import Dashboard from "./Components/Dashboard/Dashboard"
import Footer from "./Components/Footer/footer";
import Home from "./Components/home/main";
import Login from "./Components/login/login"
import Error from "./Components/404/404"
import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import Navbar2 from "./Components/Navbar2/Navbar2";
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
// import Alertmessg from "./Components/message/message";

function App() {
  return (
    <Router>
      <Switch>
      {/* Completely DOne */}
        <Route exact path="/">
        <Navbar/>
          <Home />
          <Footer />
        </Route>
        {/* Completely DOne */}
        <Route exact path="/login">
        <Navbar/>
            <Login />
            <Footer />
          </Route>
          {/* ASK AGE */}
          <Route exact path="/signup">
          <Navbar/>
            <Signup />
            <Footer />
          </Route>
          {/* Protected Routes */}
          <Route exact path="/login/dashboard">
          <Navbar2/>
            <Dashboard />
            <Footer />
          </Route>
          {/* Completely */}
          {/* Protected Routes */}
          <Route exact path="/login/prediction">
          <Navbar2/>
            <Pred />
            <Footer />
          </Route>
          {/* Small Changes */}
          {/* Protected Routes */}
          <Route exact path="/login/profile">
          <Navbar2/>
            <Profile />
            <Footer />
          </Route>
          {/* Protected Routes */}
          <Route exact path="/course-1-pg1">
          <Navbar2/>
            <IntroCourse />
            <Footer />
          </Route>
          <Route exact path="/spinner">
          <Navbar2 />
            <Spinner />
            <Footer />
          </Route>
          
          <Route exact path="/course-1-pg2">
          <Navbar2 />
            <Basic />
            <Footer />
          </Route>
          <Route exact path="/course-overview">
          <Navbar2 />
            <CourseOver />
            <Footer />
          </Route>
          {/* Small Changes */}
          <Route exact path="/course-info">
          <Navbar2 />
            <Pc />
            <Footer />
          </Route>
          <Route exact path="/404">
          <Navbar2 />
            <Error />
            <Footer />
          </Route>
          {/* <Route exact path="/message">
            <Alertmessg/>
          </Route> */}
          <Route path="*">
          <Navbar2 />
            <Error />
            <Footer />
          </Route>
          
      </Switch>
    </Router>

    
  );
}

export default App;
