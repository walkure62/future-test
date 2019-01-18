import React, { Component } from "react";
import "../styles/app.css";
import FetchData from "./FetchData";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    url: null
  };

  forceUpdateHandler() {
    this.forceUpdate();
  }

  setUrlMin() {
    this.setState({
      url: "data-min"
    });
  }

  setUrlMax() {
    this.setState({
      url: "data"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="data-buttons">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={this.setUrlMin.bind(this)}
          >
            Get min
          </button>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={this.setUrlMax.bind(this)}
          >
            Get max
          </button>
        </div>
        {this.state.url !== null && <FetchData urlType={this.state.url} />}
      </div>
    );
  }
}

export default App;
