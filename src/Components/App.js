import React, { Component } from 'react';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  state = {
      count:0
  }

  render() {
     const {count} = this.state;
      return (
        <div className="container">
            <Counter
                onCountUp={()=>this.setState({count:count + 1})}
                onCountDown={()=>this.setState({count:count - 1})}
                count={count}
            />
        </div>
    );
  }
}

export default App;
