import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/app.css";
import Loader from './Loader'
import { dataMin, data } from "../data";

class FetchData extends Component {
  constructor(type) {
	super();
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true, error: null });

    let url;
    if (this.props.urlType === "data-min") url = dataMin;
	if (this.props.urlType === "data") url = data;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(users => {
        let userData = users.map(data => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          );
        });
		this.setState({ data: userData });
		this.setState({
			isLoading: false
		  });
      });
  }
  render() {

	let content;

    if (this.state.isLoading) {
	  content = <Loader />;
    } else {
      content = 
            <div className="table">
              <table className="table-striped">
                <thead className="thead-light">
                  <tr className="table-articles">
                    <td>id</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>email</td>
                    <td>phone</td>
                  </tr>
                </thead>
                <tbody>{this.state.data}</tbody>
              </table>
			</div>;
    }
    return (
		<div className="App">
			{content}
		</div>
	)
  }
}

export default FetchData;
