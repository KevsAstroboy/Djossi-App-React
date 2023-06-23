import classes from './NavBar.module.css';
// import NavBarItems from './MenuItems';
import { Link } from 'react-router-dom';
import React from 'react';
// import { useState } from 'react';
// import ModalUserConnexion from './ModalUserConnexion';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DemandeModal from './DemandeModal';

const NavBarLogin = (props) =>{
    
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openModal,setOpenModal]=useState(false);
    // const [openModalConnexion,setopenModalConnexion]=useState(false)
    

    // const NavBarItem = NavBarItems.map((item,pos)=>{
    //      return(
    //         <div key={pos} className={classes[item.cssClasses]}><Link to={item.url} ><p>{item.name}</p></Link></div>
    //      )
    // })
    const handleLogout = () => {

        localStorage.removeItem('userData');
        // Supprimer les données de userData
        // dispatch({ type: 'CLEAR_USER_DATA' });
    
        // Autres actions de déconnexion, si nécessaire (ex: supprimer les cookies, réinitialiser les variables, etc.)
    
        // Rediriger vers la page de connexion ou autre
        navigate('/'); // Utilisez navigate du react-router-dom ou une autre méthode de redirection selon votre configuration
      };
    return(
       <>
         {<nav className={`navbar navbar-expand-lg bg-white navbar-white shadow ${classes.NavBar}`}>
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
                   {/* <div className={classes.zeroButton} onClick={handleLogout}><p>
                   <span class="material-symbols-outlined">
                    logout
                    </span>
                    </p></div> */}
                   <div className={classes.zeroButton}><p>{`Bienvenue,  ${props.prenom}  !`}</p></div>
                   <div className={classes.thirdButton}><img src={props.avatar} alt='user-avatar'/></div>
                   <div className={classes.thirdButton}><p>
                   <span class="material-symbols-outlined" onClick={()=> setOpenModal(true)}>
                    notifications
                    </span>
                    </p></div>
                   <div className={classes.thirdButton} onClick={handleLogout}><p>
                   <span class="material-symbols-outlined">
                    logout
                    </span>
                    </p></div>
                   {/* {NavBarItem} */}
               </div>
          </div>
        </nav>}
        <DemandeModal open={openModal} onClose={()=>setOpenModal(false)}/>
       </>
    )

}

export default NavBarLogin;