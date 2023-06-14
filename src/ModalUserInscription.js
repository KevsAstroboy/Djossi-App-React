import classes from './ModalUserInscription.module.css';
import React from 'react';
import './App.css';


const ModalUserInscription = (props) => {
    if(!props.open) return null;
    return(
        <>
        <div className={`my-5 ${classes.MainContainer}`}>
            <div className={`row align-items-center justify-content-between ${classes.modalContainer} container`}>
            <p className='firstP'>Créer un compte</p>
            <p>Profitez de votre temps libre grâce à nos jobbers</p>
            <span class="material-symbols-outlined" onClick={props.onClose}>
                close
            </span>
            <form>
                <div className='row'>
                    <div className='col-md'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nom</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Prenom</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Adresse e-mail</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Numero CNI</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                </div>
                <div className='col-md'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Numéro de téléphone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <label for="mySelect" className='my-2'>Ville</label>
                <select id="mySelect">
                <option value="option1">ABIDJAN</option>
                <option value="option2">YAMOUSSOUKRO</option>
                </select>
                <label for="mySelect" className='my-2'>Commune</label>
                <select id="mySelect">
                <option value="option1">COCODY</option>
                <option value="option2">MARCORY</option>
                </select>
                <label for="datepicker" className={classes.Margin}>Date de naissance</label>
                <input type="date" id="datepicker" name="datepicker" className='my-2'/>
                <div>
                </div>
                </div>
                <div className='col-md'>
                <div>
                <label htmlFor="fileInput">Ajouter une photo</label>
                 <input type="file" id="fileInput"/>
                 <div class="alert alert-info my-3" role="alert">
                    A simple info alert—check it out!
                </div>
                <button type="submit" className="btn btn-primary my-5">S'inscrire</button>
                </div>
                </div>
                </div>
                
            </form>
            </div>

        </div>
        </>
    )
}

export default ModalUserInscription;