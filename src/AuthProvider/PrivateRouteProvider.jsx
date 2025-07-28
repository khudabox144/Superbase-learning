import React, { Children, use } from 'react';
import { Authcontext } from './Authcontext';
import { useNavigate } from 'react-router';

const PrivateRouteProvider = ({children}) => {
    const {user}=use(Authcontext);
    const navigate=useNavigate();
    if(!user?.email){
        navigate('/auth/login');
    }
    else{
        navigate('/');
    }
    return user?.email? children :null;
};

export default PrivateRouteProvider;