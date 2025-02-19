
import React from 'react';

class AddContact extends React.Component{
    state = {
        name : "",
        email : ""
    }

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert("Please Enter Name and Email");
            return ;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        console.log(this.state)

    }

    render(){
        return(
            <div className='ui main'>
                <h2>AddContact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text'
                         name='name' 
                         placeholder='Enater Name' 
                         value={this.state.name} 
                         onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text'
                         name='email'
                          placeholder='Enter Email'
                          value={this.state.email}
                         onChange={(e)=>this.setState({email: e.target.value})}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;