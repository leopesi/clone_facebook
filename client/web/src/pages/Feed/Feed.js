import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Feed extends Component {
    render() {
        return (
            <div>
                <p>Feed aqui...</p>
                
                <Link to='/' >Sair</Link>                
            </div>
        );
    }
}

export default Feed;
