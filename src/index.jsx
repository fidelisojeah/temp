import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch,
} from 'react-router-dom';


// import routes from './routes';
import Navbar from './components/Navbar';
import Signin from './components/pages/Signin';
import App from './components/App';
import './style.scss';


ReactDOM.render(
  // <Router history={browserHistory} routes={routes} />,
  <Router history={browserHistory}>
    <App>
      <Switch>
        <Route path="/signin" component={Signin} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('main'),
);

/*
<Route path="/login" component={LoginPage} />
<Route exact path="/" component={Navbar} />
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
*/
