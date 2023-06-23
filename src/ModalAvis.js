import classes from './ModalUserConnexion.module.css';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUserdata } from './Actions';
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import dotenv from 'dotenv';

dotenv.config();


const colors = {
  bleu: "#FFBA5A",
  grey: "#a9a9a9"
  
};

const ModalAvis = (props) => {
  const [note, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [commentaire,setCommentaire] = useState('');
  const stars = Array(5).fill(0)
  const navigate = useNavigate();
  const reservation = useSelector((state) => state.reservationId);

  const savedUserData = localStorage.getItem('userData');
  const userData = JSON.parse(savedUserData)
  
  const apiUrl = process.env.REACT_APP_API_URL;
    // const dispatch = useDispatch();
  
  const handleClick = value => {
      setCurrentValue(value)
      // console.log(currentValue)
    }  
  
  const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
  const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

  const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      stars: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 190,
      },
      textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0 0 115px",
        minHeight: 100,
        width: 300
      },
      button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
      }
    
    };
  const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          if (userData && reservation && note > 1 && commentaire !== null){
            const response = await axios.post(`${apiUrl}api/avis/${userData.id}/${reservation.prestataire.id}/`, {
              note,
              commentaire,
            });
          
            if (response.status === 200) {
              axios.get(`${apiUrl}api/paiement/${reservation.id}/`)
              .then((response) => {
                // Traiter la réponse ici
                console.log(response.data.data);
                // Autres actions à effectuer en fonction de la réponse
              })
              .catch((error) => {
                // Gérer les erreurs ici
                console.error(error);
              });
              navigate('/paiement');
              
          }
          }else{

            axios.get(`${apiUrl}api/paiement/${reservation.id}/`)
              .then((response) => {
                // Traiter la réponse ici
                console.log(response.data.data);
                // Autres actions à effectuer en fonction de la réponse
              })
              .catch((error) => {
                // Gérer les erreurs ici
                console.error(error);
              });
              navigate('/paiement');

          }} catch (error) {
              axios.get(`${apiUrl}api/paiement/${reservation.id}/`)
                .then((response) => {
                  // Traiter la réponse ici
                  console.log(response.data.data);
                  // Autres actions à effectuer en fonction de la réponse
                })
                .catch((error) => {
                  // Gérer les erreurs ici
                  console.error(error);
                });
                navigate('/paiement');
            // setMessage(error.response.data.data);
          }
      };
    return(
        <>
        <div className={`my-5 ${classes.MainContainer}`}>
            <div className={`row align-items-center justify-content-between ${classes.modalContainer} container`}>
            <p className='firstP'>Notez ce prestataire !</p>
            <p>Poour nous permettre de vous proposer les meilleurs dans leurs domaines.</p>
            {/* <span class="material-symbols-outlined" onClick={props.onClose}>
                close
            </span> */}
                {/* <div className='row'>
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
                </div>:null} */}
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={(hoverValue || note) > index ? "#436CEA": colors.grey}
                          style={{
                            marginRight: 10,
                            cursor: "pointer"
                          }}
                        />
                      )
                    })}
                </div>
                <textarea
                  placeholder="Quelle est votre expérience ?"
                  style={styles.textarea}
                  onChange={(e) => setCommentaire(e.target.value)}
                  value={commentaire}
                />
                <button onClick={handleSubmit} className="btn btn-primary my-5">Envoyer</button>
            </div>

        </div>
        </>
    )
}

export default ModalAvis;