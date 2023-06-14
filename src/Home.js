import './App.css';
import React from 'react';
import MyImg from './assets/undraw_automobile_repair_ywci.svg';
import firstIcon from './assets/engineering_FILL0_wght100_GRAD0_opsz48.svg';
import secondIcon from './assets/verified_user_FILL0_wght400_GRAD0_opsz48.svg';
import thirdIcon from './assets/account_balance_wallet_FILL0_wght400_GRAD0_opsz48.svg';
import fourthIcon from './assets/call_FILL0_wght400_GRAD0_opsz48.svg';

const Home = () =>{
    return(
        <>
           <div className="MainContainer">
            <div className='container'>
            <div className='row align-items-start justify-content-between first'>
                <div className='col-md text-start'>
                <p className='firstP'>
                Trouvez le prestataire idéal<br/> 
                pour tous les services du quotidien
                </p>
                <p className='secondP'>
                Nous facilitions la mise en relation entre les clients<br/> 
                et les prestataires de services dans différents domaines.
                </p>
                </div>
                <div className='col-md'>
                <img src={MyImg} alt='mecanician' className='img-fluid w-75'></img>
                </div>
            </div>
            <div className='row second'>
                <div className='col-md d-flex align-items-end'>
                <img src={firstIcon} alt='mecanician' className='img-fluid w-10 mx-4'></img>
                <p className='my-2'>Prestataires qualifiés</p>
                </div>
                <div className='col-md d-flex align-items-end'>
                <img src={secondIcon} alt='mecanician' className='img-fluid w-10 mx-4'></img>
                <p className='my-2'>Prestations assurées</p>
                </div>
                <div className='col-md d-flex align-items-end'>
                <img src={thirdIcon} alt='mecanician' className='img-fluid w-10 mx-4'></img>
                <p className='my-2'>Budget respecté</p>
                </div>
                <div className='col-md d-flex align-items-end'>
                <img src={fourthIcon} alt='mecanician' className='img-fluid w-10 mx-4'></img>
                <p className='my-2'>Service encadré</p>
                </div>
            </div>
            </div>
      </div>
        </>
    )
}

export default Home;