import React, { useMemo, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Routes from '../../Utils/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { UserContext, ProfileContext } from '../../Utils/UserContext';

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const profileValue = useMemo(() => ({ profile, setProfile }), [profile, setProfile]);

  return (
    <div className="App">
      <div className="App-header">
        <UserContext.Provider value={userValue}>
          <ProfileContext.Provider value={profileValue}>
            <Router>
              <Header/>
              <Grid item container lg={12} md={12} sm={12} className="main-container">
                <Routes />
              </Grid>
            </Router>
          </ProfileContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
