import React from "react";

import './tool-tip.css';

class ToolTip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.handleMouseIn = this._handleMouseIn.bind(this);
    this.handleMouseOut = this._handleMouseOut.bind(this);
  }
  
  _handleMouseIn() {
    this.setState({hover: true});
  }
  
  _handleMouseOut() {
    this.setState({hover: false});
  }
  
  render() {
    const tooltipStyle = {
      display: this.state.hover ? 'block' : 'none'
    };
    
    return (
      <div className="tooltip">
        <div
          onMouseOver={this.handleMouseIn} 
          onMouseOut={this.handleMouseOut}
        >Hover!</div>
        <div>
          <div style={tooltipStyle}>Tooltip!</div>
        </div>
      </div>
    );
  }
}

export default ToolTip;

// не нашел как без стейта это сделать и в итоге ничего в пропсах не передаю