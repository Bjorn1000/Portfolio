import React, { Component } from 'react';


import ProgramCard from '../ProgramCard/ProgramCard';
class InteractiveApps extends Component {
    constructor() {
        super();
        this.state = {
            programs: []
        };
        
    }
    
    componentDidMount() {
        fetch('/api/programs')
          .then(res => res.json())
          .then(programs => this.setState({programs}, () => console.log('Customers fetched...', programs)));
      }
   
    
    render () {
       
        let programCards = this.state.programs.map(program => {
            return (
                <div className="col-sm-2" style={{padding: "120px"}}>
                    <ProgramCard key={program.id} program={program}></ProgramCard>
                </div>
            )
        })
        return (
            <div className="container">
                
                <div className="row">
                <h2>Programs</h2>
                    {programCards}
                </div>
            </div>
        );
    }
}
export default InteractiveApps;