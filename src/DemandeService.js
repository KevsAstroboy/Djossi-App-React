import React, { useState, useEffect } from 'react';
import classes from './DemandeService.module.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dotenv from 'dotenv';

dotenv.config();

const DemandeService = () => {

    const userData = useSelector((state) => state.userDatas);
    const apiUrl = process.env.REACT_APP_API_URL;
    const [commentaireData, setCommentaireData] = useState();
    const [error, setError] = useState();
    const [requestError, setRequestError] = useState();
    const [callWarning, setCallWarning] = useState();
    const [onButtonClick, setOnButtonClick] = useState(true);
    const [isOK, setisOK] = useState(false);
    const navigate = useNavigate();
    const savedUserData = localStorage.getItem('userData');
    const userDatas = JSON.parse(savedUserData)
    
    // console.log(userData)

    useEffect(() => {
        const fetchData = async () => {
          if (userData) {
            try {
              const response = await axios.get(`${apiUrl}api/avis/${userData.id}/`);
              if (response.status === 200) {
                const commentaireDat = response.data.data;
                // console.log(`${apiUrl}${response.data.data.photo_prestataire}`)
                // console.log(prestataireDat)
                // prestataireData.photo_prestataire = `http://127.0.0.1:8000/${response.data.data.photo_prestataire}`;
                // console.log(prestataireData)
                setCommentaireData(commentaireDat);
              }
            } catch (error) {
              // console.error(error);
              // error = error.data.data;
                setError("Ce prestataire n'a pas d'avis."); 
            }
          }
        };
      
        fetchData();
      }, [userData && userData.id]);
    
    //   useEffect(() => {
    //     const checkLastRequest = async () => {
    //       if (userDatas && userData) {
    //         try {
    //           const response = await axios.get(`${apiUrl}api/check-last-reservation/${userDatas.id}/${userData.id}/`);
    //           if (response.status === 200) {
    //             setisOK(true)
    //             setOnButtonClick(false)

    //           }
    //         } catch (error) {
    //           console.error(error);
    //           // error = error.data.data;
    //         //   setCallWarning("Veuillez patientez que le prestataire accepte votre demande."); 
    //         }
    //       }
    //     };
      
    //     checkLastRequest();
    //   }, [userData && userData.id, userDatas && userDatas.id]);

    
      
      const checkLastRequest = () => {
        if(!userDatas){
            navigate('/');
        }
        axios.get(`${apiUrl}api/check-last-reservation/${userDatas.id}/${userData.id}/`)
          .then(response => {
            console.log(response.data.data)
            setisOK(true)
            console.log(isOK)
            setOnButtonClick(false)
            // Faites quelque chose avec les données de réponse ici
          })
          .catch(error => {
            console.error(error);
            setCallWarning("Veuillez patientez que le prestataire accepte en cas de demande de service."); 
            // Gérez les erreurs ici
          });
      };

      useEffect(() => {
        const interval = setInterval(() => {
          checkLastRequest();
        }, 30000); // 30 secondes
    
        return () => {
          clearInterval(interval);
        };
      }, []);
      const makeRequest = () => {
        axios.get(`${apiUrl}api/reservation/${userDatas.id}/${userData.id}/`)
          .then(response => {
            console.log(response.data.data)
            setOnButtonClick(false)
            checkLastRequest()
            // Faites quelque chose avec les données de réponse ici
          })
          .catch(error => {
            console.error(error);
            setRequestError("Impossible de faire une demande de service."); 
            // Gérez les erreurs ici
          });
      };
      

      const canceledRequest = () => {
        axios.put(`${apiUrl}api/canceled-user-reservation/${userDatas.id}/${userData.id}/`)
          .then(response => {
            console.log(response.data.data)
            setOnButtonClick(true)
            setisOK(false)
            setCallWarning(); 
            // Faites quelque chose avec les données de réponse ici
          })
          .catch(error => {
            console.error(error);
            setError("Nous rencontrons un problème."); 
            // Gérez les erreurs ici
          });
      };
        

    return(
        <>
        <div className='row'>
            <div className='col-md'></div>
            {userData ? <div className={`col-md ${classes.LeftPart}`}>
                <div className={classes.BoxUser}>
                    <img src={`${apiUrl}${userData.photo_prestataire}`} alt='user-avatar' className={`img-fluid  ${classes.UserAvatar}`}/>
                    <p className={classes.UserRates}>{`${userData.moyenne_note} étoiles (${userData.avis} Avis)`}</p>
                    {onButtonClick ? <div className={classes.RequestButton} onClick={makeRequest}>Demander un service</div>: <div className={classes.CanceledButton} onClick={canceledRequest}>Annuler la demande</div>}
                    {isOK ? (
                    <div className={classes.RequestButton} onClick={() => window.open(`tel:${userData.phone_number}`)}>
                        {userData.phone_number}
                        <span class="material-symbols-outlined">
                            call 
                        </span>
                        
                    </div>
                    ) : (
                    <div role="alert" className="alert my-3">
                        {callWarning}
                    </div>
                    )}

                </div>
            </div>:<div role="alert" className="alert alert-info my-3">
                    {requestError}
                    </div>}
            {userData ?<div className={`col-md text-start ${classes.RightPart}`}>
                <p className={classes.UserName}>{`${userData.prenom_prestataire} ${userData.nom_prestataire}`}</p>
                <p className={classes.Biographie}>{userData.biographie}</p>

                <p className={classes.RatesTitle}>Avis et commentaire</p>
                <p className={classes.Rates}>{userData.moyenne_note}</p>
                <p className={classes.RatesDetails}>{`sur 5 pour ${userData.avis} (Avis)`}</p>
                <div className={classes.Commentaire}>
                    {commentaireData ? commentaireData.map((item,pos)=>{
                        return(
                            <>
                            <div className={ `row ${classes.BoxCommentaire}`} key={pos}>
                               <img src={`${apiUrl}${item.client.photo_client}`} alt='avatar' className={`mx-5 col-5`}/>
                               <div className={`row col-7 ${classes.Details}`}>
                                    <p className={classes.Name}>{item.client.prenom_client}</p>
                                    <p className={classes.Notes}>{`${item.note} étoiles`}</p>
                                    <p>{item.commentaire}</p>
                              </div>
                            </div>
                            </>
                        )
                    }) : <div role="alert" className="alert alert-info my-3">
                    {    error}
                    </div>}
                </div>
            </div>:null}
            <div className='col'></div>
        </div>
        </>
    )
}

export default DemandeService;