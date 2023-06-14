import classes from './ModalUserConnexion.module.css';
import './App.css';
import React from 'react';

const ModalUserConnexion = (props) => {
    if(!props.open) return null;
    return(
        <>
        <div className={`my-5 ${classes.MainContainer}`}>
            <div className={`row align-items-center justify-content-between ${classes.modalContainer} container`}>
            <p className='firstP'>Content de vous revoir !</p>
            <p>Connectez-vous pour accéder à votre compte</p>
            <span class="material-symbols-outlined" onClick={props.onClose}>
                close
            </span>
            <form>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                </div>
                <div className='col-4'></div>
                </div>
                <div class="alert alert-info my-3" role="alert">
                    A simple info alert—check it out!
                </div>
                <button type="submit" className="btn btn-primary my-5">Se connecter</button>
            </form>
            </div>

        </div>
        </>
    )
}

export default ModalUserConnexion;