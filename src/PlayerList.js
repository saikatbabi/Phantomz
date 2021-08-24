import React from "react";
import Card from "./Card";

 const PlayerList=({players,pics})=>{
     return(
         players.map((users,i)=>
            {
                return <Card key={players[i].id} name={players[i].name} ability={players[i].specialAbility} pic={pics[i]} about={players[i].about}/>
            })
         

    );
 }
 export default PlayerList;