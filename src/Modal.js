import classes from './Modal.module.css';
import React from 'react';
import { ModalLeftItems } from './ModalItems';
import { ModalRightItems } from './ModalItems';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Modal = (props) => {
  if (!props.open) return null;

  const userData = localStorage.getItem('userData');
  // const navigate = useNavigate();
  const redirectUrl = '/inscription';

  // const handleLinkClick = (item) => {
  //   if (userData) {
  //     // Rediriger vers la page spécifiée dans l'item
  //     setRedirectUrl(item.url);
  //   } else {
  //     // Rediriger vers la page de connexion
  //     setRedirectUrl('/inscription');
  //   }
  // };

  // // Effectuer la redirection après la mise à jour de l'URL de redirection
  // if (redirectUrl) {
  //   navigate(redirectUrl);
  // }

  return (
    <>
      <div className={`container my-5 ${classes.MainContainer}`}>
        <div className={`row align-items-center justify-content-between ${classes.modalContainer}`}>
          <span className="material-symbols-outlined" onClick={props.onClose}>
            close
          </span>
          <div className="col-md">
            {ModalLeftItems.map((item, pos) => (
              <Link
                key={pos}
                to={userData ? item.url : redirectUrl}
                className={classes.ElementContainer}
                onClick={props.onClose}
              >
                <div className={classes.jobLogo}>
                  <img src={item.img} alt={item.alt} />
                </div>
                <p className="my-3">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="col-md">
            {ModalRightItems.map((item, pos) => (
              <Link
              key={pos}
              to={userData ? item.url : redirectUrl}
              className={classes.ElementContainer}
              onClick={props.onClose}
            >
              <div className={classes.jobLogo}>
                <img src={item.img} alt={item.alt} />
              </div>
              <p className="my-3">{item.name}</p>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
