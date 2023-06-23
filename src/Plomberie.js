// import React from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import axios from 'axios';
import classes from './Mecanicien.module.css';
import './App.css';
import { useDispatch } from 'react-redux';
import { setUserdata } from './Actions';
import { Link } from 'react-router-dom';
import dotenv from 'dotenv';

dotenv.config();


const Plomberie = () => {
  
  const [prestataireData, setPrestataireData] = useState();
  const [prestataireDatas, setPrestataireDatas] = useState();
  const [onClick, setonClick] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    ville: '',
    commune: '',
    optional: '',
  });
  const [error, setError] = useState("Aucun plombier n'a été trouvé dans votre zone.");
  const [error1, setError1] = useState("Aucun plombier n'a été trouvé dans votre zone.");

  const userData = JSON.parse(localStorage.getItem('userData'));
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      if (userData && userData.commune && userData.ville) {
        try {
          const response = await axios.get(`${apiUrl}api/plombier-user/${userData.commune}/${userData.ville}/`);
          if (response.status === 200) {
            const prestataireDat = response.data.data;
            // console.log(`${apiUrl}${response.data.data.photo_prestataire}`)
            // console.log(prestataireDat)
            // prestataireData.photo_prestataire = `http://127.0.0.1:8000/${response.data.data.photo_prestataire}`;
            // console.log(prestataireData)
            setPrestataireData(prestataireDat);
          }
        } catch (error) {
          // console.error(error);
          // error = error.data.data;
            setError("Aucun plombier n'a été trouvé dans votre zone."); 
        }
      }
    };
  
    fetchData();
  }, [userData && userData.commune, userData && userData.ville]);
    
  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  }
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  
  //   // Vérifier si la valeur est null ou undefined
  //   const updatedValue = value === null || value === undefined ? "" : value;
  
  //   setFormData({
  //     ...formData,
  //     [name]: updatedValue,
  //   });
  // };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.commune && formData.ville) {
      console.log(formData.commune);
      console.log(formData.ville);
      console.log(onClick)
      console.log(formData.optional);
      const url = formData.optional ? `${apiUrl}api/plombier-user/${formData.commune}/${formData.ville}/${formData.optional}/`
                   : `${apiUrl}api/plombier-user/${formData.commune}/${formData.ville}/`;
      try {
        
        const response = await axios.get(url);
        if (response.status === 200) 
        
        {
          const prestataireDat = response.data.data;
          // console.log(prestataireDat);
          setPrestataireDatas(prestataireDat); // Update the state with the fetched data
        }
      } catch (error) {
        // console.error(error.data);
        setError1("Aucun plombier n'a été trouvé dans votre zone.");
      }
    }
  };
  
  
    
    return(
        <>
            <div className="MainContainer">
            <div className='container'>
            <div className='row align-items-start justify-content-between first'>
                <div className='col-md text-start'>
                <p className='paragraphe'>
                Trouvez le prestataire idéal, partout en Côte d'Ivoire,<br/> 
                en quelques minutes.
                </p>
                <p className='para2'>
                Faites vous dépanner chap chap<br/> 
                par un plombier<br/> 
                qualifié non loin de vous.
                </p>
                </div>
                <div className='col-md'>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className="dropdown mx-2 my-2 col-md">
                      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ville
                      </button>
                      <ul className="dropdown-menu">
                        <select  name="ville" value={formData.ville} onChange={handleChange}>
                          <option value="">Selectionnez une ville</option>
                          <option value="ABIDJAN">ABIDJAN</option>
                          <option value="YAMOUSSOUKRO">YAMOUSSOUKRO</option>
                        </select>
                      </ul>
                    </div>
                    <div className="dropdown mx-2 my-2 col-md">
                      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Commune
                      </button>
                      <ul className="dropdown-menu ">
                        <select name="commune" value={formData.commune} onChange={handleChange}>
                          <option value="">Selectionnez une commune</option>
                          <option value="COCODY">COCODY</option>
                          <option value="MARCORY">MARCORY</option>
                          <option value="GRAND-BASSAM">GRAND-BASSAM</option>
                          <option value="KOUMASSI">KOUMASSI</option>
                        </select>
                      </ul>
                    </div>
                    <input type="text" className="form-control mx-2 my-2 col-md"  placeholder='Mots clés quartier, cite ...' name="optional" value={formData.optional} onChange={handleChange}/>
                    <button type="submit" className="btn btn-primary col-md" onClick={()=>setonClick(true)}>Chercher</button>
                  </div>
                </form>
                 <div className='row my-5'>
                 <div className='col-3'></div>
                 <div className='col-3'></div>
                 <div className={`col-3 ${classes.Main}`}>
                      {onClick ? (prestataireDatas ?(
                        prestataireDatas.map((item, pos) => {
                          return (
                            <Link to='/demande-service' onClick={() => dispatch(setUserdata(item))} key={pos}>
                            <div className={classes.Box}>
                              <div className={classes.Avatar}>
                                <img src={`${apiUrl}${item.photo_prestataire}`} alt="prestataire-avatar" />
                              </div>
                              <div className={classes.Details}>
                                <p className={classes.Name}>{`${item.prenom_prestataire} ${item.nom_prestataire}`}</p>
                                <p className={classes.Job}>{item.service}</p>
                                <p className={classes.Notes}>{`${item.moyenne_note} étoiles (${item.avis} Avis)`}</p>
                              </div>
                            </div>
                            </Link>
                            
                          );
                        })): ( error1 ?
                          <div role="alert" className="alert alert-info my-3">
                            {error1}
                          </div>:null
                        )
                         ) : (
                        prestataireData ? (
                          prestataireData.map((item, pos) => {
                            return (
                              <Link to='/demande-service' key={pos} onClick={()=>dispatch(setUserdata(item))}>
                              <div className={classes.Box} >
                                <div className={classes.Avatar}>
                                  <img src={`${apiUrl}${item.photo_prestataire}`} alt="prestataire-avatar" />
                                </div>
                                <div className={classes.Details}>
                                  <p className={classes.Name}>{`${item.prenom_prestataire} ${item.nom_prestataire}`}</p>
                                  <p className={classes.Job}>{item.service}</p>
                                  <p className={classes.Notes}>{`${item.moyenne_note} étoiles (${item.avis} Avis)`}</p>
                                </div>
                              </div>
                              </Link>
                            );
                          })
                        ) : (
                          <div role="alert" className="alert alert-info my-3">
                            {error}
                          </div>
                        )
                      )}
                    </div>

                 </div>
                </div>
            </div>
            </div>
      </div>
        </>
    )
  }


export default Plomberie;