import { Component } from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

class CarDriveLogPersonal extends Component{
  render(){
    return(
     
      <ListItemButton sx={{ pl: 10 }}>
      
        <ListItemText primary="운행기록부(개인화)"  primaryTypographyProps={{fontSize: '15px'}}/>
      </ListItemButton>
    
    )
  }
}

export default CarDriveLogPersonal;