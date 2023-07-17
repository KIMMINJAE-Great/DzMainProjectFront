// import React, { Component } from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
// import RegCar from './regCar/RegCar';
// import CarDriveLogManagement from './carDriveLogManagement/CarDriveLogManagement';
// import RelCostState from './relCostState/RelCostState';
// import CheckIcon from '@mui/icons-material/Check';
// import './nav.css';
// import { ThemeProvider } from '@emotion/react';
// import { createTheme } from '@mui/material';

// const theme = createTheme({
//   components: {
//     MuiListItemText: {
//       styleOverrides: {
//         primary: {
//           fontSize: '15px',
//           fontWeight: 'bold',
//           height:'15px',
//           lineHeight:'15px'
//         },
//       },
//     },
//   }
// });

// class Nav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open1: false,
//       open2: false,
//       open3: false,
//     };
//   }

//   handleButtonClick = (value) => {
//     this.props.onButtonClick(value); // 선택한 버튼의 값을 부모 컴포넌트로 전달
//   };
  
//   handleClick1 = () => {
//     this.setState(prevState => ({
//       open1: !prevState.open1
//     }));
//   };
//   handleClick2 = () => {
//     this.setState(prevState => ({
//       open2: !prevState.open2
//     }));
//   };
//   handleClick3 = () => {
//     this.setState(prevState => ({
//       open3: !prevState.open3
//     }));
//   };



//   render() {
//     return (
//       <ThemeProvider theme={theme} >
//         <div class="nav-container">
//           <List
//             sx={{ width: '250px', maxWidth: 360, bgcolor: '#f5f5f5', height: '87.1vh', borderRight: 'solid 0.5px black',overflowY:'auto' }}
//             component="nav"
//             aria-labelledby="nested-list-subheader"
//           // subheader={
//           //   <ListSubheader component="div" id="nested-list-subheader">
//           //     Nested List Items
//           //   </ListSubheader>
//           // }
//           >
//             <ListItemButton onClick={this.handleClick1}>
//               <ListItemText primary="기초정보관리" />
//               {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>


//             <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
           
//                 <ListItemButton sx={{ pl: 5,backgroundColor: 'white' }} onClick={() => this.handleButtonClick('사원관리')}>
//                   <ListItemText primary="사원관리" />
//                 </ListItemButton>
              

              
//                 <ListItemButton sx={{ pl: 5,backgroundColor: 'white' }} onClick={() => this.handleButtonClick('부서관리')}>
//                   <ListItemText primary="부서관리" />
//                 </ListItemButton>
             

              
//                 <ListItemButton sx={{ pl: 5,backgroundColor: 'white' }} >
//                   <ListItemText primary="거래처관리" />
//                 </ListItemButton>
                
              

//               <ListItemButton sx={{ pl: 5,backgroundColor: 'white',marginBottom:'-7px' }}> 
//                 <ListItemText primary="회사등록" />
//               </ListItemButton>
             
//             </Collapse>
// <hr></hr>


//             {/*  업무승용차관리(회계) */}
//             <ListItemButton onClick={this.handleClick2}>
//               <ListItemText primary="업무승용차관리(회계)" />
//               {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>


//             <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
//               <ListItemButton sx={{ pl: 5,backgroundColor: 'white' }}>
//                 <ListItemText primary="차량등록" />
//               </ListItemButton>
               
//               <ListItemButton sx={{ pl: 5,backgroundColor: 'white' }}>
//                 <ListItemText primary="운행기록부(관리용)" />
//               </ListItemButton>

//               <ListItemButton sx={{ pl: 5,backgroundColor: 'white',marginBottom:'-7px' }}>
//                 <ListItemText primary="관련비용명세서" />
//               </ListItemButton>
//             </Collapse>
//             <hr></hr>

// {/*  업무승용차관리(임직원) */}
//             <ListItemButton onClick={this.handleClick3}>
//               <ListItemText primary="업무승용차관리(임직원)" />
//               {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>


//             <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
//               <ListItemButton sx={{ pl: 5,backgroundColor: 'white' }}>
//                 <ListItemText primary="운행기록부(개인화)" />
//               </ListItemButton>

//               <ListItemButton sx={{ pl: 5,backgroundColor: 'white',marginBottom:'-7px' }}>
//                 <ListItemText primary="운행기록부(관리용)" />
//               </ListItemButton>
//             </Collapse>
//             <hr></hr>
//             {/* link to 사용법 */}
//             {/* <ListItem disableGutters={true} button={true} key='Home' component={Link} to={"/"} selected={'/' === pathname}>
//    <ListItemIcon><Home /></ListItemIcon>
//    <ListItemText primary='Home' />
// </ListItem> */}


//           </List>
//         </div>
//       </ThemeProvider>
      
//     );
//   }
// }

// export default Nav;
import React, { Component } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import RegCar from './regCar/RegCar';
import CarDriveLogManagement from './carDriveLogManagement/CarDriveLogManagement';
import RelCostState from './relCostState/RelCostState';
import CheckIcon from '@mui/icons-material/Check';
import './nav.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '15px',
          fontWeight: 'bold',
          height:'15px',
          lineHeight:'15px'
        },
      },
    },
  }
});

class Nav extends Component {
  state = {
    openSections: {},
  };

  handleMainClick = (index) => {
    this.setState(prevState => ({
      openSections: {
        ...prevState.openSections,
        [index]: !prevState.openSections[index]
      }
    }));
  };
  handleButtonClick = (value) => {
        this.props.onButtonClick(value);
    };


  sections = [
    {
      title: '기초정보관리',
      subItems: ['사원관리', '부서관리', '거래처관리', '회사등록'],
    },
    {
      title: '업무승용차관리(회계)',
      subItems: ['차량등록', '운행기록부(관리용)', '관련비용명세서'],
    },
    {
      title: '업무승용차관리(임직원)',
      subItems: ['운행기록부(개인화)', '운행기록부(엑셀업로드)'],
    },
    // 추가적인 섹션을 여기에 추가
  ];

  render() {
    return (
      <ThemeProvider theme={theme} >
      <List
        sx={{
          width: '250px',
          maxWidth: 360,
          bgcolor: '#f5f5f5',
          height: '87.1vh',
          borderRight: 'solid 0.5px black',
          overflowY:'auto'
        }}
        component="nav"
      >
        {this.sections.map((section, index) => (
           
          <React.Fragment key={section.title}>
            <ListItemButton onClick={() => this.handleMainClick(index)}>
              <ListItemText primary={section.title} />
              {this.state.openSections[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={this.state.openSections[index] || false} timeout="auto" unmountOnExit>
              {section.subItems.map(subItem => (
                <ListItemButton sx={{ pl: 5,backgroundColor: 'white',marginBottom:'-7px' }} onClick={() => this.handleButtonClick(subItem)} key={subItem}>
                  <ListItemText primary={subItem} />
                </ListItemButton>
              ))}
            </Collapse>
            <hr/>
          </React.Fragment>
        ))}
      </List>
      </ThemeProvider>
    );
  }
}

export default Nav;