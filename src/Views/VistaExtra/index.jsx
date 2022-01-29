import React, {useState} from 'react';
import Header from "../../Components/Header";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@material-ui/core';
import ImageAspectRatioIcon from '@mui/icons-material/ImageAspectRatio';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import "./index.scss";



const steps = ['Tipo de petición', 'Configuración de la petición', 'Detalles de la petición', 'Peticiones derivadas'];

export default function VistaExtra() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  
  const parteizHead=(
    <div>
   <div style={{color: "white", marginTop: "20px", display: "flex", width: "200px", fontSize: "20px", marginLeft: "10px"}}><div><ImageAspectRatioIcon/></div><div style={{marginLeft: "10px"}}>Crear petición</div></div>
    </div>
  );
 
  const precios=(
    <Grid container >
         <Grid item xs={6}>
        
         </Grid>
         <Grid item xs={3} style={{fontSize: "20px", marginTop: "-10px", display: "flex"}}>
         <div><PictureAsPdfIcon/></div><div style={{marginLeft: "10px"}}>Precios</div>
         </Grid>
        
    </Grid>
  );
  
  return (
    <>
    <Header height="180px" marginHeadertop="20px" parteizHead={parteizHead}  precios={precios}/> 

    
     <div className='contenedorTotal'>
       <div>
     <Box sx={{ width: '80%', marginLeft: "auto", marginRight: "auto"}}>
      <Stepper nonLinear activeStep={activeStep} style={{padding: "20px", paddingTop: "30px"}}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]} >
            <StepButton  onClick={handleStep(index)} >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div >
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
          
               
          </React.Fragment>
        )}
      </div>
    </Box>
    </div>
    <div className="containerCuadros">
      <div className="contCuadros">
      <div className="almacenes"><div>ALMACENES</div></div>
      <div className="compras"><div>COMPRAS</div></div>
      <div className="it"><div>IT</div></div>
      <div className="rrhh"><div>RRHH</div></div>
      <div className="viajes"><div>VIAJES</div></div>
      </div>
    </div>

     </div>
    
    </>

  );
}