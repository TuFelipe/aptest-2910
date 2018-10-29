import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {dropDownActive: false}
  }
  dropDownActive(bol) {
    if (this.props.secondary) {
      this.setState({ dropDownActive: bol })
    }
  }
  render() {
    return (
      <div>
        <button
          className={'button' + (this.props.secondary ? ' secondary' : ' primary')}
          onClick={() => this.dropDownActive(true)}
        >
          {this.props.text}
        </button>
        {this.state.dropDownActive &&
          <div
            className={this.props.fixedMenu ? 'drop-down drop-down-fixed' : 'drop-down'}
            onMouseLeave={() => this.dropDownActive(false)}
          >
            <div className="drop-down-item">
              <div>Adultos</div>
              <div>
                <button className="quantity less" />
                  <span>0</span>
                <button className="quantity more" />
              </div>
            </div>
            <div className="drop-down-item">
              <div>Crianças</div>
              <div>
                <button className="quantity less" />
                  <span>2</span>
                <button className="quantity more" />
              </div>
            </div>
            <div className="drop-down-actions">
              <div className="clean" onClick={() => this.dropDownActive(false)}>Limpar</div>
              <div className="success" onClick={() => this.dropDownActive(false)}>Aplicar</div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Button;
