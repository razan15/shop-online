import React from 'react';
import { withRouter } from "react-router-dom";
import './Home.css';

 function Home(props) {
    return (
      
        <div className="Home">
            <h1>Welcome</h1>
            <p>The Best Offers all<br />
               in one place 
            </p> 
            <button onClick={() => {
                props.history.push('/main');
                }}>Shop now
            </button> 
        </div>
    )
}

export default withRouter(Home);