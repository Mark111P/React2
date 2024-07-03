import React from "react";

export function Actor(props){
    let name = props.name;

    return(
        <>
            <div style={{color: 'darkred', padding: '10px'}}>{name}</div>
        </>
    )
}
export function Poster(props){
    let imgSrc = props.imgSrc;

    return(
        <>
            <img src={imgSrc} style={{width: '200px', height: 'auto', borderRadius: '10px', margin: '10px'}}></img>
        </>
    )
}
export class Movie extends React.Component{
    render(){
        return(
            <>
                <div style={{color: 'darkblue', fontWeight: 'bold', padding: '10px'}}>{this.props.name}</div>
                <Poster imgSrc={this.props.imgSrc}></Poster>
                {
                    this.props.actors.map(function(actor, i){
                    return <Actor name={actor} key={i}/>;
                })}
            </>
        )
    }
}