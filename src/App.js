import React, { Component } from 'react';
import PlayerList from './PlayerList';
import {players} from './players';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './App.css';
class App extends Component {
    
    constructor(){
        super();
        console.log('hello')
        this.state ={
            players: players,
          
            searchfield:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})

        
    }
    
    render(){
        const filterPlayers = this.state.players.filter(player=>{
            return (
                player.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

            );
        })
        
        return(
            <div className='tc'>
                <h1>Phantomz group</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <PlayerList players={filterPlayers}/>
                </Scroll>
            </div>

              );
    }
}
export default App;