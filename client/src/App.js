// import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutuspage from "./pages/Aboutuspage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Classroompage from "./pages/Classroompage";
import Calendarpage from "./pages/Calendarpage";
import Newspage from "./pages/Newspage";
import Setuppage from "./pages/Setuppage";
import Englishpage from "./pages/Englishpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={Aboutuspage} />
          <Route path="/login" component={Loginpage} />
          <Route path="/signup" component={Signuppage} />
          <ProtectedRoute path="/classroom" component={Classroompage} />
          <Route path="/calendar" component={Calendarpage} />
          <Route path="/news" component={Newspage} />
          <Route path="/setup" component={Setuppage} />
        <Route path="/english" component={Englishpage} />
          
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
