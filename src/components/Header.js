import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Logo from '../assets/logo.png';
import Menu from '../assets/menu.png';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {fixedMenu: false}
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
      if (window.scrollY > 200) {
          this.setState({ fixedMenu: true });
      } else {
          this.setState({ fixedMenu: false });
      }
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="logo">
            <img src={Logo} width="32" />
            {this.state.fixedMenu &&
              <div className="search-bar">
                <input type="text" placeholder="Amsterdã"/>
              </div>
            }
          </div>
          <div className="menu">
            <ul>
              <li>faça sua reserva</li>
              <li>troque seus pontos</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="mobile-menu">
            <img src={Menu} width="32" />
          </div>
        </div>
        <div className="search-change-locale">
          <div className="keywords">
            <h2>Amsterdã, Reino dos Países Baixos</h2>
          </div>
          <div className="result-count">
            <p>Encontramos 209 Hotéis</p>
          </div>
          <Button text="Alterar destino" />
        </div>
        <div className={this.state.fixedMenu ?
          'search-menu fixed-menu' :
          'search-menu relative-menu'}
          >
          <ul>
            <li><Button secondary text="Datas" fixedMenu={this.state.fixedMenu} /></li>
            <li><Button secondary text="Hóspedes" fixedMenu={this.state.fixedMenu} /></li>
            <li><Button secondary text="Comodidades" fixedMenu={this.state.fixedMenu} /></li>
            <li><Button secondary text="Preço" fixedMenu={this.state.fixedMenu} /></li>
            <li><Button secondary text="Rating" fixedMenu={this.state.fixedMenu} /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
