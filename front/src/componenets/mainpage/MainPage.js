import { Component } from "react";
import Header from "../header/Header";
import { Link } from 'react-router-dom';
import Nav from "../nav/Nav.js";
import './mainPage.css';
import EmpManagement from "../nav/empManagement/EmpManagement";
import DepManagement from "../nav/depManagement/DepManagement";
import TradeManagement from './../nav/tradeManagement/TradeManagement';
import CompanyReg from './../nav/companyReg/CompanyReg';
import RegCar from "../nav/regCar/RegCar";
import CarDriveLogManagement from "../nav/carDriveLogManagement/CarDriveLogManagement";
import RelCostState from "../nav/relCostState/RelCostState";
import CarDriveLogPersonal from './../nav/carDriveLogPersonal/CarDriveLogPersonal';
import CarDriveExcelUpload from './../nav/carDriveExcelUpload/CarDriveExcelUpload';
class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedButton: '',
      componentToShow :null,
    };
  }
  handleButtonClick = async (value) => {
    this.setState({ selectedButton: value },()=>{
     
    });

    // 비동기 작업 수행
    await this.someAsyncFunction();
    // 비동기 작업 완료 후 추가 로직 수행
  };

  

  someAsyncFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 비동기 작업 완료 후 resolve 호출
        resolve();
      }, 2000);
    });
  };

  render() {

    const components = {
      '사원관리': <EmpManagement />,
      '부서관리': <DepManagement />,
      '거래처관리' : <TradeManagement/>,
      '회사등록' : <CompanyReg/>,
      '차량등록' :<RegCar/>,
      '운행기록부(관리용)' : <CarDriveLogManagement/>,
      '관련비용명세서' : <RelCostState/>,
      '운행기록부(개인화)' : <CarDriveLogPersonal/>,
      '운행기록부(엑셀업로드)' : <CarDriveExcelUpload/>,
      
    };
    const { selectedButton } = this.state;
    const componentToShow = components[selectedButton];

    return (
      <div class="mainPage-container">
        <Header selectedButton={selectedButton}></Header>

        <div style={{display:'flex'}}> 
        <div class="nav-container">
          <Nav onButtonClick={this.handleButtonClick}></Nav>
        </div>
        <div class="section-container" style={{paddingLeft:2}} >
        {componentToShow}
          

        </div>
        </div>
        
      </div>

    )

  }

}


export default MainPage;