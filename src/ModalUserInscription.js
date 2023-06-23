import classes from './ModalUserInscription.module.css';
// import React from 'react';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ModalUserInscription = (props) => {
    if(!props.open) return null;
    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;
    const [formData, setFormData] = useState({
        nom_client: '',
        prenom_client: '',
        username: '',
        phone_number: '',
        commune: '',
        ville: '',
        numero_cni: '',
        password:'',
      });

      
        const handleChange = (e) => {
            if (e.target.name === 'photo_client') {
              setSelectedFile(e.target.files[0]);
            } else {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }
          };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const formDataToSend = new FormData();
          formDataToSend.append('nom_client', formData.nom_client);
          formDataToSend.append('prenom_client', formData.prenom_client);
          formDataToSend.append('username', formData.username);
          formDataToSend.append('phone_number', formData.phone_number);
          formDataToSend.append('commune', formData.commune);
          formDataToSend.append('ville', formData.ville);
          formDataToSend.append('numero_cni', formData.numero_cni);
          formDataToSend.append('password', formData.password);
          formDataToSend.append('photo_client', selectedFile);
    
          const response = await axios.post(`${apiUrl}api/register/`, formDataToSend);
          if (response.status === 200) {
            setMessage('Account created successfully!');
          }
        } catch (error) {
        //   console.error(error.response.data.data);
          setMessage(error.response.data.data);
        }
      };
    return(
        <>
        <div className={`my-5 ${classes.MainContainer}`}>
            <div className={`row align-items-center justify-content-between ${classes.modalContainer} container`}>
            <p className='firstP'>Créer un compte</p>
            <p>Profitez de votre temps libre grâce à nos jobbers</p>
            <span class="material-symbols-outlined" onClick={props.onClose}>
                close
            </span>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nom</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" value={formData.nom_client} onChange={handleChange} name="nom_client"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Prenom</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" value={formData.prenom_client} onChange={handleChange} name="prenom_client"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Numero CNI</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" value={formData.numero_cni} onChange={handleChange} name="numero_cni"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
                    <input type="password" className="form-control"  value={formData.password} onChange={handleChange} name="password"/>
                </div>
                </div>
                <div className='col-md'>
                    <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Numéro de téléphone</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" value={formData.phone_number} onChange={handleChange} name="phone_number"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>
                    <input type="text" className="form-control"  aria-describedby="emailHelp" value={formData.username} onChange={handleChange} name="username"/>
                </div>
                <label for="mySelect" className='my-2'>Ville</label>
                <select id="mySelect" value={formData.ville} onChange={handleChange} name="ville">
                <option value="">Selectionnez une ville</option>
                <option value="ABIDJAN">ABIDJAN</option>
                <option value="YAMOUSSOUKRO">YAMOUSSOUKRO</option>
                </select>
                <label for="Select" className='my-2'>Commune</label>
                <select id="Select" value={formData.commune} onChange={handleChange} name="commune">
                <option value="">Selectionnez une commune</option>
                <option value="COCODY">COCODY</option>
                <option value="MARCORY">MARCORY</option>
                </select>
                <div>
                </div>
                </div>
                <div className='col-md'>
                <div>
                <label htmlFor="fileInput">Ajoutez une photo</label>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleChange}
                  name="photo_client"
                />
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                 {message?<div  role="alert" className="alert alert-info my-3">
                 {message}
                </div>:null}
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