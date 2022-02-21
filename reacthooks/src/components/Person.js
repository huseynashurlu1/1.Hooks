import React, { Component } from 'react'
import axios from 'axios';

class Person extends Component {
    state = {
        persons: []
    }

     componentDidMount() {
       axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const persons = response.data;
                this.setState({
                    persons
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
  render() {
      const {persons} = this.state;
    return (
      <div>
            <ul>
                {
                    persons.map(person => {
                        return <li style={{fontWeight: "bold"}} key={person.id}>City: {person.address.street} Country:{person.address.city}</li>
                    })
                }
            </ul>
      </div>
    )
  }
}

export default Person