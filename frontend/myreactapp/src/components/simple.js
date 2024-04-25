import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


export function ProfileSuccess(){
    let {id}=useParams();
    return( <div>
        <h3>Registered with an id: {id}</h3>
    </div>)
}

export function ProfileList()
{
   let [list,setList]=useState([]);
   let URL='http://localhost:9091/api/profile'

   let handleClick =(e)=>
   {
     axios.get(URL).then(response => setList(response.data));
   }
   return <div>
     <h3>List of Profiles</h3>
     <button onClick={handleClick}>Refresh</button>
     <table className="table table-striped">
        <thead>
            <tr>
                <th>Pic</th>
                <th>Profile ID</th>
                <th>Name</th>
                <th>phone</th>
                <th>BirthDay</th>
            </tr>
        </thead>
        <tbody>
            {list.map((profile,index)=>
           <tr key={index}>
            <td>image{index}</td> 
            <td>{profile.id}</td>
            <td>{profile.name}</td>
            <td>{profile.phone}</td>
            <td>{profile.dob}</td>
           </tr>
                 
        )}
        </tbody>
     </table>
   </div>
}


export function UserFromJson()
{
    let URL='https://jsonplaceholder.typicode.com/users';
    let [id,setId]=useState('');

    let handleClick=(e)=>{
        axios.get(`${URL}/${id}`)
        .then(response => setUser(response.data))
        .catch(error => console.log(error));
    }
    let [user,setUser]=useState('');

    return <div>
        <input type="number" name="id" onChange={e=>setId(e.target.value)} placeholder="Enter id" />
        <button className="btn btn-primary" onClick={handleClick}>Search</button>

        <div>
            <p>Hello {user.username}, your email {user.email}</p>
        </div>

    </div>

}



export  function ProfileForm()
{
    let [name,setName]=useState('');
    let [password,setPassword]=useState('');
    let [phone,setPhone]=useState('');
    let [dob,setDob]=useState('');
    let [profile,setProfile]=useState('');
    let [id,setId]=useState('');

    let URL='http://localhost:9091/api/profile'

    let navigate=useNavigate();

    
    let handleSubmit =(e)=>{
        e.preventDefault();
        axios.post(URL,{"name":name,"dob":dob,"phone":phone}).
        then(response => navigate(`/success/${response.data.id}`))
        .catch(error => console.log("error"));
        
    }
    let handleDelete =(e)=>
        {
            axios.delete(`${URL}/${id}`).then(response => console.log("id delted"))
            .catch(error => console.log("error"));
        }
    return <div>
        <h3>Profile Registration</h3>
        {profile !='' ?(<h3>Profile Registered with an id:{profile.id}</h3>):''}
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={e=>setName(e.target.value)} placeholder="Enter Name"/><br />
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder="Enter Password"/><br />
            <input type="number" name="phone" onChange={e=>setPhone(e.target.value)} placeholder="Enter Phone Number" /><br />
            <input type="date" name="dob" onChange={e=>setDob(e.target.value)} placeholder="Enter DOB"/><br />

            <input type="submit" value='Register'></input>
            
        </form>
        <br /> <br /> <br />
        <form onSubmit={handleDelete}> 
           <input type="number" name="id" onChange={e =>setId(e.target.value)} placeholder="Enter id you want to delete" />
           <input type="submit" value="delete" ></input>
        </form> <br /> <br /> <br />

    </div>

}


export function Simple()
{
    let username='Harsh';
    return <div>
        <h3>Hello {username}</h3>
    </div>
}

export function User(props)
{
    let name=props.name;
    let age=props.age;
    return <div>
        <h2>User Componenet</h2>
        <h3>Hello,{name} ,your age is {age}</h3>
    </div>
}

export function Profile(props)
{
    let profile=props.profile;
    return <div>
        <img src={profile.imageURL} width="100" height="100"  style={{borderRadius:'50%'}}></img>
        <p>Name : {profile.name}</p>
        <p>BirthDay: {profile.dob}</p>
        <p>Email: {profile.email}</p>
    </div>
}