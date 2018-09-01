import React, { Component } from 'react';
  

class ProgramCard extends Component {
  render() {
    return (
      <div className="card" style={{width: "12rem", height:"15rem", maxHeight: "15rem"}}>
      
        <div className="card-body">
          <a href={this.props.program.url}>
            <h5 className="card-title">{this.props.program.name}</h5>
          </a>
          <h6 className="card-subtitle mb-2 text-muted">Written in: {this.props.program.language}</h6>
          <p className="card-text">{this.props.program.purpose}</p>
        </div>
      </div>
    )
  }
}

export default ProgramCard;
