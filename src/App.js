import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import QuizList from './containers/QuizList/QuizList';
import Logout from './components/Logout/Logout';

import {autoLogIn} from './store/actions/auth';


class App extends React.Component {
  componentDidMount() {
    this.props.autoLogIn()
  }

  render() {
    const {isAuthenticated} = this.props;

    return (
      <Layout>
        <Switch>
          {isAuthenticated && <Route path="/logout" component={Logout} />}
          {!isAuthenticated && <Route path="/auth" component={Auth} />}
          {isAuthenticated && <Route path="/quiz-creator" component={QuizCreator} />}
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}


function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogIn: () => dispatch(autoLogIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
