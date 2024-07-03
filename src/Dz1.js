import React from "react";

export function Skill(props){
    let name = props.name;

    return(
        <>
            <div style={{color: 'darkred', padding: '10px'}}>{name}</div>
        </>
    )
}
export function Picture(props){
    let imgSrc = props.imgSrc;

    return(
        <>
            <img src={imgSrc} style={{width: '200px', height: 'auto', borderRadius: '10px', margin: '10px'}}></img>
        </>
    )
}
export class AboutMe extends React.Component{
    render(){
        return(
            <>
                <div style={{color: 'darkblue', fontWeight: 'bold', padding: '10px'}}>{this.props.name}</div>
                <Picture imgSrc={this.props.imgSrc}></Picture>
                {
                    this.props.skills.map(function(skill, i){
                    return <Skill name={skill} key={i}/>;
                })}
            </>
        )
    }
}