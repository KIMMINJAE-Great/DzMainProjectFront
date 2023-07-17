import React, { Component } from 'react';
import LoginView from './LoginView';
import LoginImage from '../../images/mainPage.png'
import { Box } from '@mui/material';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      errorMessage: '',
      usernameError: false,
      passwordError:false,
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
      console.log(this.state.username+' && '+ this.state.password)  
      axios.post('http://localhost:8080/emp/login', {
        emp_id: this.state.username,
        password: this.state.password,
      }).then(response => {
        
          this.setState({ usernameError: false });
          console.log(response.data)
          console.log('로그인 성공');
          sessionStorage.setItem('user', JSON.stringify(response.data));
          this.props.history.push("/mainpage");
    
      }).catch(error => {
        if(error.response.status === 404){      
          if(error.response.data ==='id not found'){   
            this.setState({ usernameError: true });
          } else{
            this.setState({ passwordError: true });
          }
        }
        console.log('로그인 요청 에러', error);
      });
    
  };

  handleForgotPassword = () => {
    // 여기에 비밀번호 찾기 기능을 구현하세요
  };

  setUsername = (username) => {
    this.setState({ username });
  };

  setPassword = (password) => {
    this.setState({ password });
  };

  setRememberMe = (rememberMe) => {
    this.setState({ rememberMe });
  };

  render() {
    const { username, password, rememberMe, errorMessage, usernameError, passwordError } = this.state;

    return (
     
      <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Box display="flex" alignItems="center">
      <img src={LoginImage} 
      alt=""
      style={{ width: '75%', height: 'auto', maxHeight: '100%', objectFit: 'cover' }}
      /> 
    <LoginView 
      username={username}
      password={password}
      rememberMe={rememberMe}
      errorMessage={errorMessage}
      usernameError={usernameError}
      passwordError={passwordError}
      setUsername={this.setUsername}
      setPassword={this.setPassword}
      setRememberMe={this.setRememberMe}
      handleLogin={this.handleLogin}
      handleForgotPassword={this.handleForgotPassword}
    />
    </Box>
    </div>
    );
  }
}

export default withRouter(Login);
