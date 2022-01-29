import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@mui/x-data-grid';
import "./index.scss";
import Header from "../../Components/Header";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid from '@material-ui/core/Grid';
import { BsShield } from 'react-icons/bs';
import SearchIcon from '@mui/icons-material/Search';

import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const columns = [
  { field: 'id', headerName: 'Matricula', width: 200, height: 100 },
  { field: 'firstName', headerName: 'Marca', width: 130 },
  { field: 'lastName', headerName: 'Modelo', width: 600 },
  {
    field: 'age',
    headerName: 'Kilometros',
    type: 'number',
    width: 120,
  },
  
];


const rows = [
  { id: "ddjkjksdsk", lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: "djkdsjd", lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: "kjsddkssd", lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: "kjkds", lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: "jsdsksddsjd", lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: "jsdsddskjd", lastName: 'Melisandre', firstName: null, age: 150 },
  { id: "jsdskfdfgjd", lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: "gfgfgfg", lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: "jsdsgggfkjd", lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: "ggfgfgfg", lastName: 'Melisandre', firstName: null, age: 150 },
  { id: "jsdskhhyjd", lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: "jsdskjd", lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: "jsdskjd", lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ListadoVehiculo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const parteizHead=(
    <div>
   <div style={{color: "white", marginTop: "20px", display: "flex", width: "150px", cursor: "pointer"}}><SearchIcon/>Filtros</div>
    </div>
  );
  const parteCentralHead=(
    <Grid container >
         <Grid item xs={3} style={{fontSize: "33px"}}>
         <BsShield/>
         </Grid>
         <Grid item xs={3} style={{fontSize: "30px", marginLeft: "-10px"}}>
        Vehiculos
         </Grid>
    </Grid>
  );
  const precios=(
    <Grid container >
         <Grid item xs={4} style={{fontSize: "33px"}}>
         </Grid>
         <Grid item xs={3} style={{fontSize: "30px", marginLeft: "-10px"}}>
         <Button style={{background: "#57bbd0", width: "160px", fontWeight: "700" }} >Nuevo Vehículo</Button>
         </Grid>
    </Grid>
  );
     
  return (
    <>
    <Header height="150px" marginHeadertop="20px" parteizHead={parteizHead}  precios={precios} parteCentralHead={parteCentralHead}/> 
    <div className="todo">
    <div className= "menu">
     <div className='divdetallado'><Button variant="contained" style={{background: "#67d7f8", width: "200px", background: "transparent",boxShadow: "none", border: "1px solid #ccc"}}><div style={{marginRight: "auto", left: 0, marginLeft: "-7px"}}>Matricula</div></Button></div>
     
     <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
        <div>Contrato*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Contrato 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Contrato 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>

      <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
        <div>Marca*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Contrato 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Contrato 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>

      <div className='divdetallado'><Button variant="contained" style={{background: "#67d7f8", width: "200px", background: "transparent",boxShadow: "none", border: "1px solid #ccc"}}><div style={{marginRight: "auto", left: 0, marginLeft: "-7px"}}>Modelo</div></Button></div>
     

      <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
        <div>Tipo de Vehículo*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Tipo de vehiculos 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Tipo de vehiculos 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>

      <div className='divdetallado'><Button variant="contained" style={{background: "#67d7f8", width: "200px", background: "transparent",boxShadow: "none", border: "1px solid #ccc"}}><div style={{marginRight: "auto", left: 0, marginLeft: "-7px"}}>Capacidad</div></Button></div>
    

      <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
        <div>Cliente*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Cliente 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Cliente 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>

      <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
         <div>Rotulación*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Rotulacion 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Rotulacion 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>
      <div className='divdetallado'><Button variant="contained" style={{background: "#67d7f8", width: "200px", background: "transparent",boxShadow: "none", border: "1px solid #ccc"}}><div style={{marginRight: "auto", left: 0, marginLeft: "-7px"}}>Fecha de adquisición</div></Button></div>
      <div className='divdetallado'><Button variant="contained" style={{background: "#67d7f8", width: "200px", background: "transparent",boxShadow: "none", border: "1px solid #ccc"}}><div style={{marginRight: "auto", left: 0, marginLeft: "-7px"}}>Fecha de devolución</div></Button></div>
    

      <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
        <div>Estado*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Estado 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Estado 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>

      <div className='divdetallado'><Button variant="contained" style={{background: "#67d7f8", width: "200px", background: "transparent",boxShadow: "none", border: "1px solid #ccc"}}><div style={{marginRight: "auto", left: 0, marginLeft: "-7px"}}>Próxima ITV</div></Button></div>
       
      <div className='divdetallado'>  
     <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ background: "transparent", border: "1px solid #ccc", width: "200px", boxShadow: "none"}}
      
      >
        <div>Tipo de Servicio*</div> <div style={{marginLeft: "auto", right: 0}}><ArrowDropDownIcon style={{color: "#77726e"}}/></div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
       
      >
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Tipo de servicio 1</MenuItem>
        <MenuItem onClick={handleClose}  style={{width: "200px"}}>Tipo de servicio 2</MenuItem>
        <MenuItem onClick={handleClose}>Contrato 3</MenuItem>
      </Menu>
      
      </div>
    </div>
    <div style={{ height: "750px", background: "white", width: '80%', marginLeft: "auto", right: 0, marginRight: "50px", marginTop: "-57px", borderRadius: "5px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </div>
  </>
  );

}