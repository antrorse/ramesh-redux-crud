import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, useNavigate } from 'react-router-dom';
import { userDelete } from './UserReducer';

function Home() {
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const handleDelete=(id)=>{
        dispatch(userDelete({id:id}))
    }
    
  return (
    <div className='container'>
        <h2>CRUD Operations with Redux</h2>
        <Link to='/create' className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/update/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home