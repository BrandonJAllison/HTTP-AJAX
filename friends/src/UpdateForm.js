import React from 'react';


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
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='name' onChange={this.handleChange} value={this.state.info.name} placeholder='Name'/>
        <input type='text' name='age' onChange={this.handleChange} value={this.state.info.age} placeholder='Age'/>
        <input type='text' name='email' onChange={this.handleChange} value={this.state.info.email} placeholder='Email'/>
        <button type='submit'>Update</button>
      </form>
    );
  }
}

export default UpdateForm;