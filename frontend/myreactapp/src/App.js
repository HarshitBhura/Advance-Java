import './App.css';
import { Simple,User,Profile, ProfileForm, UserFromJson, ProfileList, ProfileSuccess} from './components/simple';

import { Route,Link,Routes } from 'react-router-dom';

function SimpleList()
{
  let items=["Apple","Grapes","Mango","Orange"];
  return <div>
    <h3>List of items:-</h3>
    <ol>
      {items.map((item,index)=><li key={index}>{item}<button className='btn btn-primary'>{item}</button></li>)}
    </ol>

  </div>
}



function App() {
   return (
    <div>
      <div>
        <Link to="/register">Register Profile</Link> ||
        <Link to="/list">List of Profiles</Link> ||
        <Link to="/delete"> Delete the profile</Link> ||
        <Link to="/userJson">Users JSon</Link>
      </div>
      <hr />
      <div>
        <Routes>
          <Route path='' element={<div>Show some default components</div>}></Route>
          <Route path='/register' element={<ProfileForm />}></Route>
          <Route path='/list' element={<ProfileList />}></Route>
          <Route path='/delte' element={<div>delete the componenet</div>}></Route>
          <Route path='/userJson' element={<UserFromJson />}></Route>
          <Route path='/success/:id' element={<ProfileSuccess />}></Route>
        </Routes>
      </div>
    </div>
   )
}

export default App;
