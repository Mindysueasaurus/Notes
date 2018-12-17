import React from 'react';
import axios from 'axios';


import NoteCard from './NoteCard';



export default class NotesList extends React.Component{
  constructor(props) {
    super (props);
    this.state = {
      notes: [],
      active: null
    }
  }

  componentDidMount() {
    axios
      .get('https://backend-notes.herokuapp.com/api/notes/')
      .then( response => {
        this.setState({ notes: response.data });
      })
      .catch( error => {
        console.error( error );
      })
  }
  
  active = id => this.setState({ active: id })

  render(){
    return (
      <div className="notes-main">
        <h2>Your Notes:</h2>
       <div className="notes">
        {this.state.notes.map( note => (
          <NoteCard key={note.id} note={note} />
        ))}
        </div>
      
      </div>
    )
  }
}