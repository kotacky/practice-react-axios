import React from 'react';
import axios from 'axios';
import './PersonsList.css';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <table>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>住所</th>
          <th>メールアドレス</th>
          <th>Webサイト</th>
        </tr>
        {this.state.persons.map(person =>
          <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.address.street} {person.address.suite} {person.address.city}</td>
            <td>{person.email}</td>
            <td><a href="#">{person.website}</a></td>
          </tr>
        )}
      </table>
    )
  }
}
