import classes from './NavBar.module.css';
import NavBarItems from './MenuItems';
import { Link } from 'react-router-dom';
import React from 'react';
// import { useSelector } from 'react-redux';
import NavBarLogin from './NavBarLogin';
import { useState } from 'react';
import Modal from './Modal';
import dotenv from 'dotenv';

dotenv.config();
// import { useDispatch } from 'react-redux';
// import { setUserdata } from './Actions';


// import ModalUserConnexion from './ModalUserConnexion';
const NavBar = (props) =>{
 
    const [openModal,setOpenModal]=useState(false)
    const savedUserData = localStorage.getItem('userData');
    // const dispatch = useDispatch();
    // if (savedUserData) {
    // dispatch(setUserdata(JSON.parse(savedUserData)));
    // }
    // const userData = useSelector((state) => state.userDatas);
    const userData = JSON.parse(savedUserData)
    const apiUrl = process.env.REACT_APP_API_URL;
    
    
    // let user_photo = null;
    // const [openModalConnexion,setopenModalConnexion]=useState(false)
    

    // const NavBarItem = NavBarItems.map((item,pos)=>{
    //      return(
    //         <div key={pos} className={classes[item.cssClasses]}><Link to={item.url} ><p>{item.name}</p></Link></div>
    //      )
    // })
  
    
    const NavBarItem = NavBarItems.map((item,pos)=>{
         return(
            <div key={pos} className={classes[item.cssClasses]}><Link to={item.url} ><p>{item.name}</p></Link></div>
         )
    })

    return(
       <>
         {userData ? <NavBarLogin  prenom ={userData.prenom_client} avatar ={`${apiUrl}${userData.photo_client}`} openModal={()=>setOpenModal(true)}/> : <nav className={`navbar navbar-expand-sm bg-white navbar-white shadow ${classes.NavBar}`}>
          <div className='container'>
               <Link to='/' className='navbar-brand'><h4>djossi</h4></Link>
               <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navmenu'>
               <span class="material-symbols-outlined">
                    menu
                </span>
               </button>
               <div className={classes.searchInput} onClick={props.openModal}>
               <p>Je cherche un ...</p>
                <span className="material-symbols-outlined">
                    search
                </span>
               </div>
               <div className={`collapse navbar-collapse ${classes.thirdElement}`} id='navmenu'>
                   {/* <div className={classes.firstButton}><a href='www.google.com'><p>Devenir prestataire</p></a></div>
                   <div className={classes.secondButton}><a href='www.google.com'><p>Connexion</p></a></div>
                   <div className={classes.thirdButton}><a href='www.google.com'><p>Inscription</p></a></div> */}
                   {NavBarItem}
               </div>
          </div>
        </nav>}
        <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
       </>
    )

}

export default NavBar;