import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from '../components/hoc/Layout/components/Layout';
import Quiz from './Quiz/containers/Quiz';
import Auth from './Auth/containers/Auth';
import QuizCreator from './QuizCreator/containers/QuizCreator';
import QuizList from './QuizList/containers/QuizList';
import Logout from '../components/Logout/containers/Logout';

import {autoLogIn} from './Auth/actions/auth';


class App extends React.Component {
  componentDidMount() {
    this.props.autoLogIn()
  }

  render() {
    const {isAuthenticated} = this.props;
console.log('this.props', this.props)
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
