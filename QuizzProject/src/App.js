
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Accueil from './Composants/Accueil';
import Quizz from './Composants/Quizz';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Quizz sur les pays</h1>
        <BrowserRouter>
          <Switch>
            {/* Route vers l'accueil */}
            <Route path="/" component={Accueil} exact={true} />
            {/* Route vers le quizz */}
            <Route path="/quizz" component={Quizz} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
