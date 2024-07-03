export function Work(props){
    let index = parseInt(props.index);

    let name, text = '';

    switch (index){
        case 0:{
            name = 'Name1';
            text = 'Text1';
        }break;
        case 1:{
            name = 'Name2';
            text = 'Text2';
        }break;
        case 2:{
            name = 'Name3';
            text = 'Text3';
        }break;
    }

    return(
        <>
            <br></br>
            <h3>{name}</h3>
            <h4>{text}</h4>
        </>
    )
}

export function About(){
    return(
        <>
            <h2>William Shakespear</h2>
            <h4>Biography</h4>
            <Work index="0"></Work>
            <Work index="1"></Work>
            <Work index="2"></Work>
        </>
    )
}