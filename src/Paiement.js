import React from 'react';
import classes from './Paiement.module.css';
import logopay from './assets/mode-de-paiement.png';
import logocash from './assets/porte-monnaie.png';


const Paiement = () => {
     return(
        <>
          <div className="MainContainer">
            <div className='container'>
            <div className='row align-items-start justify-content-around first'>
                <p className={classes.firstP}>
                Merci de bien vouloir payer le prestataire en cash 
                </p>
                <p><h3 className={classes.secondP}>djossi</h3> vous remercie et à la prochaine pour une prochaine demande de service</p>

                     <img src={logopay} alt='mode-paiement' className='img-fluid w-25'></img>
                     <img src={logocash} alt='porte-monnaie' className='img-fluid w-25'></img>
                {/* <p className={classes.secondP}>
                développez votre activité.
                </p> */}
                {/* <div className='col-md'>
                <img src={MyImg} alt='electrician' className='img-fluid w-75 mt-5'></img>
                </div> */}
            </div>
            <div className='row second'>
                
            </div>
            </div>
      </div>
        </>
     )
}

export default Paiement;