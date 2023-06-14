import React from 'react';
import classes from './Prestataire.module.css';
import MyImg from './assets/undraw_electricity_k2ft.svg';
import Appstore from './assets/appstore.png';
import GooglePlay from './assets/googleplay.png';


const Prestataire = () => {
     return(
        <>
          <div className="MainContainer">
            <div className='container'>
            <div className='row align-items-start justify-content-between first'>
                <div className='col-md text-start'>
                <p className={classes.firstP}>
                Devenez prestataire<br/> 
                de services à<br/> 
                domicile et
                </p>
                <p className={classes.secondP}>
                développez votre activité.
                </p>
                <p>Commencez à augmenter vos revenus en téléchargeant l'app</p>
                <div className='container d-flex g-0'>
                     <img src={Appstore} alt='Appstore' className='img-fluid w-25 mx-5'></img>
                     <img src={GooglePlay} alt='GooglePlay' className='img-fluid w-25'></img>
                </div>
                </div>
                <div className='col-md'>
                <img src={MyImg} alt='electrician' className='img-fluid w-75 mt-5'></img>
                </div>
            </div>
            <div className='row second'>
                
            </div>
            </div>
      </div>
        </>
     )
}

export default Prestataire;