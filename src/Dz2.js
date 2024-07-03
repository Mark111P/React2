import React from "react";

export function PetImg(props){
    return(
        <>
            <img src={props.petImg} style={{width: '200px', margin: '10px', border: '1px solid black', borderRadius: '20px'}}></img>
        </>
    )
}
export function PetName(props){
    return(
        <>
            <div style={{margin:'10px', fontWeight: 'bold', fontStyle: 'italic', color: 'darkgreen'}}>{props.name}</div>
        </>
    )
}

export class Pet extends React.Component{
    render(){
        return(
            <>
                <PetName name={this.props.name}></PetName>
                <PetImg petImg={this.props.petImg}></PetImg>
            </>
        )
    }
}