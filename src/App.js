import AppBar from "./components/AppBar";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Jobs from "./components/Jobs/Jobs";
import Resume from "./components/Resume";
import Signup from "./components/Signup";
import Portal from "./components/Portal";
import Drawer from "./components/Drawer/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  // globalColor: "#14a800", //either add extra variable
  palette: {
    primary: {
      main: "#14a800", //or override
    },
  },
});

const sample = [{ jobId: 0, title: "title", desc: "desc" }];
const drawerWidth = 240;
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [jobs, setJobs] = useState(sample);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [profile, setProfile] = useState({
    //dummy state.It should be empty, requires database for login info to be  correct here
    email: "fgbf",
    name: "Adnan",
    age: "14",
    lastSchool: "dvdf",
    lastQualification: "fddfb",
    type: "employee",
    recentJobsApplied: sample,
  });

  const { recentJobsApplied, ...userInfo } = profile;

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <AppBar
            setMobileOpen={setMobileOpen}
            loggedIn={loggedIn}
            drawerWidth={drawerWidth}
            mobileOpen={mobileOpen}
          />
          <Grid container spacing={2}>
            {loggedIn && (
              <Grid item xs="auto">
                <Drawer
                  profile={profile}
                  drawerWidth={drawerWidth}
                  mobileOpen={mobileOpen}
                  loggedIn={loggedIn}
                  setMobileOpen={setMobileOpen}
                />
              </Grid>
            )}

            <Grid item xs>
              {/* <Item> */}
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
                    setProfile={setProfile}
                  />
                </Route>
                <Route path="/profile">
                  <Profile
                    loggedIn={loggedIn}
                    userInfo={userInfo}
                    recentJobsApplied={recentJobsApplied}
                  />
                </Route>
                <Route path="/jobs/:id">
                  <Resume user={user} />
                </Route>
                <Route path="/jobs">
                  <Jobs loggedIn={loggedIn} jobs={jobs} user={user} />
                </Route>
                <Route path="/settings">
                  <Settings loggedIn={loggedIn} />
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
              {/* </Item> */}
            </Grid>
          </Grid>

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
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
