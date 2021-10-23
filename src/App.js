import AppBar from "./components/AppBar";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Jobs from "./components/Jobs/Jobs";
import Resume from "./components/Resume";
import Signup from "./components/Signup";
import Portal from "./components/Portal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  // globalColor: "#14a800", //either add extra variable
  palette: {
    primary: {
      main: "#14a800", //or override
    },
  },
});

const sample = { title: "title", desc: "desc" };

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [jobs, setJobs] = useState([sample]);
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <header>
            <AppBar />
            {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          </header>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <Login
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  setUser={setUser}
                />
              </Route>
              <Route path="/signup">
                <Signup
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  setUser={setUser}
                />
              </Route>
              <Route path="/jobs/:id">
                <Resume user={user} />
              </Route>
              <Route path="/jobs">
                <Jobs loggedIn={loggedIn} jobs={jobs} user={user} />
              </Route>
              <Route path="/portal">
                <Portal
                  user={user}
                  loggedIn={loggedIn}
                  setJobs={setJobs}
                  jobs={jobs}
                />
                {/*for employer only*/}
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
