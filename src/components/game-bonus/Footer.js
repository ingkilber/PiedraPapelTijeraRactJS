import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import imagen from "../../styles/images/icon-close.svg";
import instructions from "../../styles/images/image-rules-bonus.svg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    color: "hsl(229, 25%, 31%)",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: 400,
    height: 550,
    borderRadius: "10px",
  },
  title: {
    margin: "1rem 0 3rem 0",
  },
  close: {
    margin: "4rem auto 0 auto",
    width: "20px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <footer>
      <button className="btn" type="button" onClick={handleOpen}>
      <h1>NORMAS</h1>
      </button>
      <Link to={"/"} className=" btn btn-bonus">
      <h1>JUEGO CLÁSICO</h1> 
      </Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="modal-title" className={classes.title}>
            NORMAS
            </h2>
            <img src={instructions} alt="insructions" />
            <img
              src={imagen}
              alt="img"
              onClick={handleClose}
              className={classes.close}
            />
          </div>
        </Fade>
      </Modal>
    </footer>
  );
};

export default Footer;
