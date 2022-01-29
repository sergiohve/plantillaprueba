import React, {useState} from 'react';
import { isMobile } from "react-device-detect";
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import  './index.scss';
import FichaDetalleVehiculos from "../../Views/FichaDetalleVehiculos";

export default function Header({height, marginHeadertop, parteizHead, parteCentralHead, precios}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
     <>
          <div className="appBar" style={{height: height}} >
        <Toolbar>
       {parteizHead}
         <Grid container className="menuContainer">
         <Grid item xs={2}  style={{marginLeft: "20px", marginTop: marginHeadertop}}>
            {parteCentralHead}
         </Grid>
         <Grid item xs={4} align="right" style={{marginLeft: "auto", right: 0}}>
         <Grid container onClick={handleOpen}>
         <Grid item xs={8} align="right" style={{marginLeft: "auto", right: 0, marginTop: "20px"}}>
          {precios}
         </Grid>
         </Grid>
         </Grid>
         </Grid>
        </Toolbar>
        {open && <div><FichaDetalleVehiculos open={open} handleOpen={handleOpen} handleClose={handleClose}/></div>}
      </div>
     
      </>
  );
}