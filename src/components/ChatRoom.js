import React, { Component } from 'react';

class ChatRoom extends Component {
  constructor() {
    super();
    this.updateMessage = this.updateMessage.bind(this); // Permite utilizar la funcion updatemessage dentro de la clase sin perder el scope (this) tambien se puede utilizar una funcion anonima
    this.submitMessage = this.submitMessage.bind(this);

    this.state = {
      message: '',
      messages: [
      ]
    }
  }

  componentDidMount() {
    firebase.database().ref('messages/').on('value', snapshot => {
      const currentMesages = snapshot.val();
      if (currentMesages != null) {
        this.setState({
          messages: currentMesages
        })
      }
    })
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  submitMessage() {
    const message = {
      id: this.state.messages.length,
      text: this.state.message
    };

    // guardar datos en la base de datos firebase
    firebase.database().ref('messages/' + message.id).set(message);

    // let listMessages = this.state.messages;
    // listMessages.push(message);
    // this.setState({
    //   messages: listMessages
    // });

    this.setState({ message: '' })
  }

  render() {
    const currentMesages = this.state.messages.map((message, i) => {
      return (
        <li key={message.id} className="list-group-item list-group-item-action">{message.text}</li>
      )
    })

    return (
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {currentMesages}
          </ul>
        </div>
        <div className="card-footer">
          <input value={this.state.message} onChange={this.updateMessage} type="text" placeholder="Escribe tu mensaje" className="form-control" />
          <button onClick={this.submitMessage} className="btn btn-secondary btn-block">Enviar Mensaje</button>
        </div>
      </div>
    )
  }
}

export default ChatRoom;