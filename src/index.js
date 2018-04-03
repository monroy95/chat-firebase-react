import React, { Component } from 'react';
// Forma 1
// import reactDOM from 'react-dom';
// Forma 2: para llamar el metodo render directamente
import { render } from 'react-dom';

// Importando Componentes
import ChatRoom from './components/ChatRoom';
// Componente
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand text-white">CHAT REACT</a>
        </nav>
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <ChatRoom />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// metodo render
render(
  <App />,
  document.getElementById('app')
);