import classes from './NavBar.module.css';
import NavBarItems from './MenuItems';
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import ModalUserConnexion from './ModalUserConnexion';
const NavBar = (props) =>{
 

    const [openModalConnexion,setopenModalConnexion]=useState(false)

    const NavBarItem = NavBarItems.map((item,pos)=>{
         return(
            <div key={pos} className={classes[item.cssClasses]}><Link to={item.url} ><p>{item.name}</p></Link></div>
         )
    })

    return(
       <>
         <nav className={`navbar navbar-expand-lg bg-white navbar-white shadow ${classes.NavBar}`}>
          <div className='container'>
               <Link to='/' className='navbar-brand'><h4>Djossi</h4></Link>
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
        </nav>
        <ModalUserConnexion open={openModalConnexion} onClose={()=>setopenModalConnexion(false)}/>
       </>
    )

}

export default NavBar;