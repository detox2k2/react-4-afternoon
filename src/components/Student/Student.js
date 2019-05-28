import React, { Component } from 'react';
import axios from 'axios'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      StudentInfo: {}
    };
  }
  

  componentDidMount(){
    return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then( results => {
    this.setState({
      StudentInfo: results.data
    })
  })
}


  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.StudentInfo.first_name} {this.state.StudentInfo.last_name}</h1>
        <h3>Grade: {this.state.StudentInfo.grade}</h3>
        <h3>Email: {this.state.StudentInfo.email}</h3>
      </div>
    )
  }
}