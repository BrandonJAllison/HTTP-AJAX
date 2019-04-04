import React from 'react';

const div = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  textAlign: 'center',
  
}

const input ={
  margin: '25px 0',
  border: 'none',
  borderBottom: '1.5px solid black',
  width: '200px'
}

const button ={
  width: '100px',
  borderRadius: '15px',
  border: '1px solid black',
  background: 'white',
  margin: '20px 0',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
}

class UpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  handleChange = event => {
    this.setState({
      info: {
        ...this.state.info,
        [event.target.name] : event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let obj = this.props.friends.filter(obj => obj.name === this.state.info.name)[0];
    let id;
    if(obj === undefined){
      id = 0;
    }
    else{
      id = obj.id;
    }
    this.props.updateToServer(this.state.info, id);
    alert("Friend Updated")
    this.setState({
      info: {
        name: '',
        age: '',
        email: ''
      }
    });
  };


  render (){
    return (
      <div>
      <p>Here you can update the information for your friends.</p>
      <form style={div} onSubmit={this.handleSubmit}>
        <input style={input} type='text' name='name' required ='required' onChange={this.handleChange} value={this.state.info.name} placeholder='Name'/>
        <input style={input} type='text' name='age' required='required' onChange={this.handleChange} value={this.state.info.age} placeholder='Age'/>
        <input style={input} type='email'name='email' required='required' onChange={this.handleChange} value={this.state.info.email} placeholder='Email'/>
        <button style={button} type='submit'>Update</button>
      </form>
      </div>
    );
  }
}

export default UpdateForm;