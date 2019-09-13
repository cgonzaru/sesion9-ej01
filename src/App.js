import React from 'react';
import './App.css';

const arr = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: arr,
      filternumber: '',
      pares: false
    }
    this.getUserNumber = this.getUserNumber.bind(this);
    this.getCheckboxStatus = this.getCheckboxStatus.bind(this);

  }

  getUserNumber(event) {
    let value = event.currentTarget.value;
    if (value !== '') {
      value = parseInt(value);
    }
    this.setState({
      filternumber: value
    });
  }

  getCheckboxStatus(event) {
    const status = event.currentTarget.checked;
    this.setState({
      pares: status
    });
  }
  
  render() {
    return (
      <div className="App">
        <input type="number" onChange={this.getUserNumber} />
        <input type="checkbox" onClick={this.getCheckboxStatus} />

        <ul className="list">
          {this.state.arr
            .filter(item => {
              if (this.state.filternumber === ''){
                //todos los elementos
                return true;
              } else {
                return this.state.filternumber <= item;
              }
            })
            .filter(item => {
              if (this.state.pares === false) {
                return true;
              } else {
                return item%2 === 0;
              }
            })
            .map(number => {
            return (
              <li key={number}>{number}</li>
            );
          })}
        </ul>
        
      </div>
    );
  }
}

export default App;
