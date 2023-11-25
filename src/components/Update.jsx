import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {updateUser} from './UserReducer';
import { useDispatch } from 'react-redux';

function Update() {
    const {id}=useParams();
    const users = useSelector((state)=>state.users);
    const existingUser = users.filter(f=>f.id==id);


    let name = '';
    let email = '';

    if (existingUser.length > 0) {
        name = existingUser[0].name;
        email = existingUser[0].email;
    }
    const [updateName,setUpdateName]=useState(name);
    const [updateEmail,setUpdateEmail]=useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name:updateName,
            email:updateEmail
        }))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5 border border-primary-subtle rounded'>
            <h3>Update User</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name='name' className='form-control' 
                    placeholder='Enter Name' value={updateName} onChange={e=>setUpdateName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' 
                    placeholder='Enter Email' value={updateEmail} onChange={e=>setUpdateEmail(e.target.value)}/>
                </div><br></br>
                <button className='btn btn-info'>Update</button>
            </form>

        </div>
    </div>
  )
}

export default Update;