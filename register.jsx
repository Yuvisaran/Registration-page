import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
 
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      password:'',
      email:'',
      mobile_number:'',
    }
  }

  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
        
             <h2>Registration Page</h2>
           
           <TextField
             hintText="Enter your User Name"
             floatingLabelText="User Name"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
            <br/>
            <TextField
             type = "password"
             hintText="Re Enter your Password"
             floatingLabelText="ConfirmPassword"
             onChange = {(event,newValue) => this.setState({confirmpassword:newValue})}
             />
            <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
           hintText="Enter your Mobile Number"
           floatingLabelText="Mobile Number"
           onChange = {(event,newValue) => this.setState({mobile_number:newValue})}
           />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
 /*
handleClick(event)
{
    var apiBaseUrl = "http://localhost:8090/equocoin/api/equocoinuser/register";
    console.log("values",this.state.username,this.state.password,this.state.confiempassword,this.state.email,this.state.mobile_number);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "username": this.state.username,
    "password":this.state.password,
     "confirmpassword":this.state.confirmpassword,
    "emailid":this.state.email,
    "mobileNo":this.state.mobile_number
    }
    axios.post(apiBaseUrl+'/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this} appContext={self.props.appContext}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

*/
const style = {
  margin: 15,
};


export default Register;