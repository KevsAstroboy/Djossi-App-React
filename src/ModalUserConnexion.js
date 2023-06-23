import classes from './ModalUserConnexion.module.css';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import dotenv from 'dotenv';

dotenv.config();
// import { useDispatch } from 'react-redux';
// import { setUserdata } from './Actions';


const ModalUserConnexion = (props) => {
    if(!props.open) return null;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
    // const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${apiUrl}api/login/`, {
              username,
              password,
            });
          
            if (response.status === 200) {
              // Store the data in LocalStorage
              navigate('/');
              localStorage.setItem('userData', JSON.stringify(response.data.data));
              // dispatch(setUserdata(response.data.data));
            //   localStorage.setItem('userData', JSON.stringify(response.data.data));
              // Redirect to the main page
            }
          } catch (error) {
            // Handle other errors, such as network issues
            // console.log(error.data);
            setMessage(error.response.data.data);
          }
      };
    return(
        <>
        <div className={`my-5 ${classes.MainContainer}`}>
            <div className={`row align-items-center justify-content-between ${classes.modalContainer} container`}>
            <p className='firstP'>Content de vous revoir !</p>
            <p>Connectez-vous pour accéder à votre compte</p>
            <span class="material-symbols-outlined" onClick={props.onClose}>
                close
            </span>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                </div>
                <div className='col-4'></div>
                </div>
                {message?<div  role="alert" className="alert alert-info my-3">
                 {message}
                </div>:null}
                <button type="submit" className="btn btn-primary my-5">Se connecter</button>
            </form>
            </div>

        </div>
        </>
    )
}

export default ModalUserConnexion;