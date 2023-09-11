export default function Friend({friend}){
    // console.log(friend)
    const {name, email, id} = friend;
    return(
        <div className="box">
            <p>id: {id}</p>
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>
            
        </div>
    )
}