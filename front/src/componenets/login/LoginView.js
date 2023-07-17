import { TextField, Button} from '@mui/material';
import React, { Component } from 'react';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      password: props.password,
      rememberMe: props.rememberMe,
      errorMessage: props.errorMessage,
      usernameError: props.usernameError,
      passwordError: props.passwordError,
    };
  }

  handleUsernameChange = (e) => {
    this.props.setUsername(e.target.value);
  }

  handlePasswordChange = (e) => {
    this.props.setPassword(e.target.value);
  }

  handleRememberMeChange = (e) => {
    this.props.setRememberMe(e.target.checked);
  }

  render() {
    const { 
      handleLogin, 
      handleForgotPassword, 
      username, 
      password, 
      rememberMe, 
      errorMessage, 
      usernameError,
      passwordError
    } = this.props;

    return (
      <div>
        <div style={{ marginTop: '-27vh', marginLeft: '5.5vh' }}>
          <h2 style={{marginTop: '-5vh' }}>로그인</h2>
          {errorMessage && <p>{errorMessage}</p>}
          <form onSubmit={handleLogin}>
            <div style={{ marginTop: '6vh'}}>
              <TextField
                label="아이디"
                variant="outlined"
                value={username}
                required
                error={usernameError}
                helperText={usernameError ? "해당 아이디는 존재하지 않습니다." : false}
                onChange={this.handleUsernameChange}
                InputProps={{ style: { borderRadius: '5vh', width: '42vh', height: '5.7vh'} }}
              />
            </div>
            <div style={{ marginTop: '2vh' }}>
              <TextField
                label="패스워드"
                type="password"
                variant="outlined"
                required
                value={password}
                error={passwordError}
                helperText={passwordError ? "해당 비밀번호는 맞지 않습니다." : false}
                onChange={this.handlePasswordChange}
                InputProps={{ style: { borderRadius: '5vh', width: '42vh', height: '5.7vh'} }}
              />
            </div>
            
            <Button
              variant="contained"
              type="submit"
              style={{ marginTop: '5vh', borderRadius: '1vh', width: '42vh', height: '6vh', backgroundColor: '#03A9F4', fontSize: '2vh', fontWeight: 'bold' }}
            >
              {/* 김민재 수정 */}
              {/* <Link to="/"style={{textDecoration : "none", color:"white"}} >다음</Link> */}
              <p style={{lineHeight:'15px'}}>다음</p>
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.6vh' }}>
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={this.handleRememberMeChange}
                />
                <label htmlFor="rememberMe" style={{ marginLeft: '0.8vh', fontSize: '1.8vh', fontWeight: 'bold' }}>
                  아이디 저장
                </label>
              </div>
              <div>
                <label htmlFor="forgotPassword" style={{fontSize: '1.8vh', fontWeight: 'bold' }}>
                  비밀번호 찾기
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginView;