import { useState } from 'react';
import NavBar from './NavBar';
import Modal from './Modal';
import { Routes , Route } from 'react-router-dom';
import Prestataire from './Prestataire';
import Home from './Home';
import React from 'react';
import Inscription from './Inscription';
import ModalUserConnexion from './ModalUserConnexion';


function App() {

   const [openModal,setOpenModal]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <NavBar openModal={()=>setOpenModal(true)}/>
      </header>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
      {/* <div className="MainContainer">
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
      </div> */}
          <>
            <Routes>
              <Route path= "/" element={<Home/>}/>
              <Route path= "/devenir-prestataire" element={<Prestataire/>}/>
              <Route path= "/connexion" element={<ModalUserConnexion/>}/>
              <Route path= "/inscription" element={<Inscription/>}/>
              {/* <Route path= "/archive" element={<Archive/>}/>
              <Route path= "/trash" element={<Trash/>}/> */}
            </Routes>
          </>
    </div>
   
  );
}

export default App;
