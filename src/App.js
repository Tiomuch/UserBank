import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="overlay">
            <li>
              <Link to="/" className="link">Users</Link>
            </li>
            <li>
              <Link to="/create-user" className="link">New User</Link>
            </li>
            <li>
              <Link to="/profile" className="link">Profile</Link>
            </li>
            <li>
              <Link to="/edit-profile" className="link">Edit profile</Link>
            </li>
          </ul>
          <hr/>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/create-user" exact>
            <CreateUser />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/edit-profile" exact>
            <EditProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
