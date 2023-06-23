// import classes from './Modal.module.css';
import React, { useState, useEffect } from 'react';
import classe from './DemandeModal.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setReservationId } from './Actions';
import dotenv from 'dotenv';

dotenv.config();
// import { useSelector } from 'react-redux';

const DemandeModal = (props) => {

  if (!props.open) return null;
  const apiUrl = process.env.REACT_APP_API_URL;
  const [demandeData, setDemandeData] = useState();
  const savedUserData = localStorage.getItem('userData');
  const dispatch = useDispatch();
  const userData = JSON.parse(savedUserData);
  const [error, setError] = useState("Vous n'avez fait de demande de service.");

  useEffect(() => {
    const fetchData = async () => {
      if (userData) {
        try {
          const response = await axios.get(`${apiUrl}api/reservation-user/${userData.id}/`);
          if (response.status === 200) {
            const demandeDat = response.data.data;
            console.log(demandeDat)
            // console.log(`${apiUrl}${response.data.data.photo_prestataire}`)
            // console.log(prestataireDat)
            // prestataireData.photo_prestataire = `http://127.0.0.1:8000/${response.data.data.photo_prestataire}`;
            // console.log(prestataireData)
            setDemandeData(demandeDat);
          }
        } catch (error) {
          // console.error(error);
          // error = error.data.data;
            setError("Vous n'avez fait de demande de service."); 
        }
      }
    };
  
    fetchData();
  }, [userData && userData.id]);


  // const navigate = useNavigate();
  

  // const handleLinkClick = (item) => {
  //   if (userData) {
  //     // Rediriger vers la page spécifiée dans l'item
  //     setRedirectUrl(item.url);
  //   } else {
  //     // Rediriger vers la page de connexion
  //     setRedirectUrl('/inscription');
  //   }
  // };

  // // Effectuer la redirection après la mise à jour de l'URL de redirection
  // if (redirectUrl) {
  //   navigate(redirectUrl);
  // }

  return (
    <>
      <div className={`container my-5 ${classe.MainContainer}`}>
        <div className={`row align-items-center justify-content-between ${classe.modalContainer}`}>
          <span className={`material-symbols-outlined ${classe.close}`} onClick={props.onClose}>
            close
          </span>
           
          <div className={classe.Commentaire}>
                           { demandeData && demandeData.length > 0 ? demandeData.map((item,pos)=>{
                                return(
                                    <>
                                    <div className={ `d-flex ${classe.BoxCommentaire} justify-content-between`} key={pos}>
                                    {/* <img src={`${apiUrl}${item.prestataire.photo_prestataire}`} className="rounded-circle col-md" style={{ width: '150px' }} alt="Avatar"/> */}
                                        <img src={`${apiUrl}${item.prestataire.photo_prestataire}`} alt='avatar' className={`img-fluid mx-5 col-md`}/>
                                        <p className={`col-md ${classe.Name}`}>
                                            {`${item.prestataire.prenom_prestataire} ${item.prestataire.nom_prestataire}`}
                                        </p>
                                        {item.status_reservation === 'Terminé' && item.status_paiement === 'Annulé' ? (
                                            <>
                                                <p className={classe.Status}>{item.status_reservation}</p>
                                                <Link to='/avis'><p className={classe.Status1} onClick={() => {props.onClose(); dispatch(setReservationId(item)) }}>Pay now</p></Link>
                                            </>
                                            ) : (
                                                <>
                                                      <p className={classe.Status}>{item.status_reservation}</p>
                                                      <p className={classe.Status2}></p>
                                                </>
                                            
                                            )}
                                    </div>

                                    </>
                                )
                           }) :  <div role="alert" className="alert alert-info my-3">
                                {error}
                             </div>}                     
          </div>
        
        </div>
      </div>
    </>
  );
};

export default DemandeModal;
