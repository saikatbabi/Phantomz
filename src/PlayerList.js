import React from "react";
import Card from "./Card";

 const PlayerList=({players})=>{
     return(
         players.map((users,i)=>
            {
                return <Card key={players[i].id} name={players[i].name} ability={players[i].specialAbility} pic={players[i].img} about={players[i].about}/>
            })
         

    );
 }
 export default PlayerList;