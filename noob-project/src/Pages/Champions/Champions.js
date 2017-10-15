import React, { Component } from 'react';

import { Switch, Route, Link} from 'react-router-dom';

import App from '../../App';



import './Champions.css';

class Champions extends Component {
  render(props) {
    let { match } = this.props;
    return (
      <Switch>
        <Route exact path={match.url} render={() => {
            return (
              <div className="/Champions">
              <div className="Champions-header">

                <h2>Champions</h2>
              </div>
              <p className="Champions-intro">
                <Link to='/Champions/ahri'>Ahri</Link>
              </p>
              </div>
            );
          }} />
        <Route path={`${match.url}/:champion`} component={App} />
      </Switch>
    );
  }
}

export default Champions;
