import React, {Component} from 'react';
import axios from 'axios';

import BugCard from './BugCard';

class Home extends Component{
  constructor(props){
      super(props);

      this.state = {
        allbugs: [],
        searchresult: [],
        hasResult: null,
        resultImage: "",
        resultName: "",
        resultRarity: "",
        resultSellingPrice: "",
        resultDescription: ""
      };
  }

  //When everything loads, load the information
  componentDidMount() {
    axios.get("/bugInfo").then((response) => {
      this.setState({ allbugs: response.data});
    });
  }

  //When user performs a bug search
  bugSearch = () => {
      let search = document.getElementById("searchBox").value;
      search = search.trim();
      search = search.split(' ').join('_'); //replace all spaces in search with "_"

      //set the result
      let result = this.state.allbugs[search];
      this.setState({searchresult: result});

      if (result !== undefined){
          this.setState({hasResult: true});
          this.setState({resultName: result['name']['name-USen']});
          this.setState({resultImage: result['icon_uri']});
          this.setState({resultRarity: result['availability']['rarity']});
          this.setState({resultSellingPrice: result['price']});
          this.setState({resultDescription: result['museum-phrase']});
      } else {
          this.setState({hasResult: false});
      }
  }

  saveButtonHandler = () => {
      const newCritter = {
          name: this.state.resultName
      }

    axios.post('/create', newCritter);
  }

  render(){
        return(
            <div>
                <h1 className="homeHeader">Welcome To The Animal Crossing Critter Search Page!</h1>
                <div className="searchLayout">
                    <input className="searchArea" id="searchBox" placeholder="Search for a bug!"/>
                    <button className="searchArea" onClick={this.bugSearch}>Search</button>
                </div>
                
                <div className="bugCardContainer">
                    <BugCard 
                        resultPresent = {this.state.hasResult}
                        imageURL = {this.state.resultImage}
                        name = {this.state.resultName}
                        rarity = {this.state.resultRarity}
                        price = {this.state.resultSellingPrice}
                        description = {this.state.resultDescription}
                        saveDataFunction = {this.saveButtonHandler}
                    />
                </div>
            </div>
        );
    }
}
export default Home;