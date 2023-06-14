import classes from './Modal.module.css';
import mecanism from './assets/mecanism.png';
import plumber from './assets/plumber.png';
import salon from './assets/salon.png';
import electricien from './assets/electrician.png';
import maquilleuse from './assets/makeup-artist.png';
import fanico from './assets/household.png';
import React from 'react';


const Modal = (props) => {
    if(!props.open) return null;
    return(
        <>
        <div className={`container my-5 ${classes.MainContainer}`}>
            <div className={`row align-items-center justify-content-between ${classes.modalContainer}`}>
            <span class="material-symbols-outlined" onClick={props.onClose}>
                close
            </span>
                <div className="col-md">
                  <a href='www.google.com'>
                  <div className={classes.ElementContainer}>
                    <div className={classes.jobLogo}>
                       <img src={mecanism} alt='mecanism-logo'/>
                    </div>
                    <p className='my-3'>Mécanicien</p>
                  </div>
                  </a>
                  <a href='www.google.com'>
                  <div className={classes.ElementContainer}>
                    <div className={classes.jobLogo}>
                       <img src={plumber} alt='plumber-logo'/>
                    </div>
                    <p className='my-3'>Plomberie</p>
                  </div>
                  </a>
                  <a href='www.google.com'>
                  <div className={classes.ElementContainer}>
                    <div className={classes.jobLogo}>
                       <img src={salon} alt='salon-logo'/>
                    </div>
                    <p className='my-3'>Coiffeur</p>
                  </div>
                  </a>
                </div>
                <div className="col-md">
                    <a href='www.google.com'>
                    <div className={classes.ElementContainer}>
                        <div className={classes.jobLogo}>
                        <img src={electricien} alt='mecanism-logo'/>
                        </div>
                        <p className='my-3'>Electricien</p>
                    </div>
                    </a>
                  <a href='www.google.com'>
                  <div className={classes.ElementContainer}>
                    <div className={classes.jobLogo}>
                       <img src={maquilleuse} alt='mecanism-logo'/>
                    </div>
                    <p className='my-3'>Maquilleuse</p>
                  </div>
                  </a>
                 <a href='www.google.com'>
                 <div className={classes.ElementContainer}>
                    <div className={classes.jobLogo}>
                       <img src={fanico} alt='mecanism-logo'/>
                    </div>
                    <p className='my-3'>Fanico</p>
                  </div>
                 </a>
                </div>
            </div>

        </div>
        </>
    )
}

export default Modal;