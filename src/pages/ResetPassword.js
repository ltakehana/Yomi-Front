import React from 'react'
import '../styles/pages/chat.css';
import ModalRecoverPassword from '../components/ModalRecoverPassword';
import { useHistory } from 'react-router-dom';


function ResetPassword (props) {
    const token = props.match.params.token;

    return(
        <div>
            {(token)&&(<ModalRecoverPassword showModal={true} page={2} token={token}></ModalRecoverPassword>)}
        </div>
    );

}

export default ResetPassword;