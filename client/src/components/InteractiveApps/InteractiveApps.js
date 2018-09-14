import React, { Component } from 'react';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';
import ProgramCard from '../ProgramCard/ProgramCard';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 30px;
    margin-left: 50px;

`;
class InteractiveApps extends Component {
    constructor() {
        super();
        this.state = {
            programs: [],
            loading: true
        };
    }
    
    componentDidMount() {
        this.setState({loading: true});
        
        fetch('/api/programs')
          .then(res => res.json())
          .then(programs => this.setState({programs}, () => 
          console.log('Customers fetched...', programs
        ),
        this.setState({loading: false})
    ));
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
               
                {console.log(this.state.loading)}

                
                    {this.state.loading ? (<div className='sweet-loading'>
                            <ClipLoader
                            className={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                            />
                        </div>) : (<div></div>) }
                    {programCards}
                </div>
            </div>
        );
    }
}
export default InteractiveApps;