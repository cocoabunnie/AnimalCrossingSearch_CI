import React, {Component} from 'react';
import axios from 'axios';

import SavedCritter from './SavedCritter';

class Saved extends Component{
  constructor(props){
      super(props);

      this.state = {
          allSavedCritters: [],
          message: ""
      }
  }

  componentDidMount = () => {
      fetch("/saved").then(res => {
          if(res.ok){
              return res.json()
          }
      }).then(savedCritters => {
          this.setState({allSavedCritters: savedCritters});

          //Let the user know if they have saved searches
          if (savedCritters.length === 0){
              this.setState({message: "You have no saved searches"});
          } else {
              this.setState({message: ""});
          }
      })
  }

  render(){
    const showSavedCritters = this.state.allSavedCritters.map(currCritter => <SavedCritter critter={currCritter}/>)
        return(
            <div>
                <h1 className="savedPageHeader">Saved Searches</h1>
                <div className="allSavedContainer">
                    <p className="savedSearchesMessage">{this.state.message}</p>
                    {showSavedCritters}
                </div>
            </div>
        );
    }
}
export default Saved;