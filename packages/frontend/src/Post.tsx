import profile from './icons/profile.svg';

interface PostProp {
    username : String;
    description: String;
}

export function Post(props : PostProp) {

    const img = "https://place-hold.it/300";

    return (
        <div className="post-container">
            <div className="user">
                <img src={profile}/>
                <h1 className="username"> {props.username} </h1>
            </div>
            <p> {props.description}</p>

            <div className="post-images">
                <img src={img}></img>
                <img src={img}></img>
                <img src={img}></img>
            </div>
        </div>  
    );
}


