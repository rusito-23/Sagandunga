import React, {Component} from 'react';
import './Home.sass';
import Login from './Login/Login.jsx'
import delicious_pizza from '../../assets/img/delicious_pizza.jpg'

class Home extends Component {
  render() {
    return (
      <div className={"Home"}>
        <div className={"Home-column Home-img"}>
          <div className={"Home-title-cover"}>
            <img src={delicious_pizza} alt={"Delicious Pizza!"}/>
          </div>
          <h1>Sagandunga!</h1>
        </div>
        <div className={"Home-column Home-login-register"}>
          <Login/>
        </div>
      </div>
    );
  }
}

export default Home;
