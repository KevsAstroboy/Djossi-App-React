import React from 'react';
import classes from './Inscription.module.css';
import UserBox from './assets/cloche.png';
import Worker from './assets/job-promotion.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalUserInscription from './ModalUserInscription';
import ModalUserConnexion from './ModalUserConnexion';

const Inscription = () => {

    const [openModal,setOpenModal]=useState(false)
    const [openModalConnexion,setopenModalConnexion]=useState(false)
    return(
        <>
         <div className="MainContainer">
         <div className='container px-5'>
            <div className='row py-3'>
                <p className={classes.Title}>Bienvenue chez Djossi</p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md'>
                    <div className={`${classes.UserBox} text-start px-4`} onClick={()=>setOpenModal(true)}>
                        <img src={UserBox} alt='userbox' className={classes.Imgsize}/>
                        <p className={classes.UserFP}>J'ai besoin d'un service</p>
                        <p className={classes.UserSP}>Trouvez le prestataire idéal pour<br/>vos services du quotidien</p>
                    </div>
                </div>
                <div className='col-md fw-bold'>
                    <p className={`${classes.Ou}`}>OU</p>
                </div>
                <div className='col-md'>
                    <Link to='/devenir-prestataire'>
                        <div className={`${classes.UserBox} text-start px-4`}>
                            <img src={Worker} alt='userbox' className={classes.Imgsize}/>
                            <p className={classes.UserFP}>Devenir prestataire</p>
                            <p className={classes.UserSP}>Augmentez vos revenus en rendant<br/>service près de chez vous</p>
                        </div>
                    </Link>
                </div>
            </div>
               <div className='row'>
                    <p className={classes.fontP}>Vous avez déjà un compte ?<Link onClick={()=>setopenModalConnexion(true)}><p className={classes.connexion}>Connectez-vous</p></Link></p>
               </div>
         </div>
        </div>
        <ModalUserInscription open={openModal} onClose={()=>setOpenModal(false)}/>
        <ModalUserConnexion open={openModalConnexion} onClose={()=>setopenModalConnexion(false)}/>
        </>
    )
}

export default Inscription;