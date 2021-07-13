import React, {Component} from 'react';


class About extends Component{
  render(){
        return(
            <div>
                <h1 className="aboutPageHeader">About</h1>
                <div className="aboutText">
                    <div className="aboutImage">
                        <img alt='' src="https://media.giphy.com/media/KDJNQ4O14e9287zR9n/giphy.gif"/>
                    </div>
                    <p>
                        Hello!<br/>
                        I'm Brianna, and I created this page to fulfill an onboarding internship assignment from Floreo Labs.<br/>
                        Animal Crossing New Horizons is one of my favorite life simulation games, so once I saw there was an API for it, I decided to create this!<br/>
                        <br/>
                        What I've Learned: <br/>
                        <br/>
                        <ul className="lessonList">
                            <li>
                                MongoDB<br/>
                                Before this assignment, the only backend tools I was familiar with were Firebase and Postgress. MongoDB is pretty much the same concept, but I really like their user interface for MongoDB Compass (a tool to help you visualize your data) WAY better than that of Postgress!
                            </li>
                            <br/>
                            <li>
                                Routing and Servers<br/>
                                I'm definitely way more confident dealing with the backend after this assignment. I've learned a lot about routing data, and requests such as post, delete, remove, and get. 
                            </li>
                            <br/>
                            <li>
                                More CSS syntax!<br/>
                                Aesthetics and design are topics I'm very interested in, so I love designing and adding art to my programming projects because it feels as if I've really made it my own. I've learned about flex boxes, and how to use the inspect tool to test out my CSS ideas before applying it to my final product.
                            </li>
                            <br/>
                            <li>
                                Never give up when you run into a programming issue.<br/>
                                Every problem has a solution - it exists! You just have to keep searching for it. Seek and ye shall find :)
                            </li>
                        </ul>
                        <br/>
                        Thanks for reading!
                    </p>
                </div>
            </div>
        );
    }
}
export default About;
