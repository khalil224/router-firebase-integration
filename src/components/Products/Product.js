import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)

const Product = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>hudai ki likhi!!</h2>
            <h5>{user ? user.displayName : 'kicuna'}</h5>
        </div>
    );
};

export default Product;