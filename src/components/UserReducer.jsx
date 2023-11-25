import { createSlice } from "@reduxjs/toolkit";
import {data} from './Data'; 

const userSlice=createSlice({
    name:"users",
    initialState:data,
    reducers:{
        addUser: (state,action)=>{
            state.push(action.payload);
        },
        updateUser:(state,action)=>{
            const {id,name,email}= action.payload;
            const updatingUser =state.find(user=>user.id==id);
            if(updatingUser){
                updatingUser.name=name;
                updatingUser.email=email;
            }
        },
        userDelete: (state,action)=>{
            const {id}= action.payload;
            const deletingUser =state.find(user=>user.id==id);
            if(deletingUser){
                return state.filter(f=>f.id!==id);
            }
        }
    }
})
export const {addUser,updateUser, userDelete}=userSlice.actions;
export default userSlice.reducer;