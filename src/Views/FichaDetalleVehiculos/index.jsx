import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import "./index.scss"
import SimCardIcon from '@mui/icons-material/SimCard';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';


const top100Films = [
  { title: 'Sara Martinez Royo', year: 1994 },
  { title: 'Sergio Herrera', year: 1972 },
  { title: 'Sonia Bermudez', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Sara Martinez Royo', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

export default function FichaDetalleVehiculos({handleClose, open, handleOpen}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
       <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        
        <Box className="box">
         <div className="appBarModal">
           <div className="editar"><div  style={{cursor: "pointer"}}><CloseIcon onClick={handleClose}/></div><div className='textEditar'>Editar datos del Vehiculo</div></div>
            <div className='cont-buttons'>
              <div><Button variant="contained" className='buttonGuardar'><div style={{marginRight: "auto", left: 0}}><div style={{marginRight: "auto", left: 0, display: "flex"}}><div><SimCardIcon style={{fontSize: "20px"}}/></div> <div>Guardar</div></div></div></Button></div>
              <div style={{marginLeft: "10px"}}><Button variant="contained" className='buttoEliminar'><div style={{marginRight: "auto", left: 0, display: "flex"}}><div><DeleteIcon style={{fontSize: "20px"}}/></div> <div>Eliminar</div></div></Button></div>
            </div>
         </div>


         <div className="content-Totel">
          <div className='contIzquierdo'>
            <div className='parteIzquierdaAlta'>
             <div className='fila'>
             <div className='campos'><TextField id="outlined-basic" label="Matrícula*" variant="outlined" fullWidth/></div>
             <div className='campos campos11'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Estado*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Estado"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Estado 1</MenuItem>
                <MenuItem value={20}>Estado 2</MenuItem>
               
                </Select>
              </FormControl>
             </div>
             </div>


             <div className='fila'>
             <div className='campos'><TextField id="outlined-basic" label="Bastidor*" variant="outlined" fullWidth/></div>
             <div className='campos campos11'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Tipo de foto</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Tipo de foto"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Tipo de foto 1</MenuItem>
                <MenuItem value={20}>Tipo de foto 2</MenuItem>
                <MenuItem value={30}>Tipo de foto 3</MenuItem>
                </Select>
              </FormControl>
             </div>
             </div>


             <div className='fila'>
             <div className='campos'>
             <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Marca*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Marca*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Renault</MenuItem>
                <MenuItem value={20}>Chevrolet</MenuItem>
                <MenuItem value={30}>Hiunday</MenuItem>
                </Select>
              </FormControl>
               
               </div>
             <div className='campos campos11'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Tipo de vehículo*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Tipo de vehículo*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Tipo de vehiculo 1</MenuItem>
                <MenuItem value={20}>Tipo de vehiculo 2</MenuItem>
                <MenuItem value={30}>Tipo de vehiculo 3</MenuItem>
                </Select>
              </FormControl>
             </div>
             </div>


             <div className='fila'>
             <div className='campos campocomplet'><TextField id="outlined-basic" label="Modelo*" variant="outlined" fullWidth/></div>
             </div>
             <div className='fila'>
             <div className='campos'><TextField id="outlined-basic" label="Capacidad*" variant="outlined" fullWidth/></div>
             <div className='campos campos11'><TextField id="outlined-basic" label="Código de neumatico" variant="outlined" fullWidth/></div>
             </div>
             </div>
             <div className='parteIzquierdaBaja'>
             <div className='fila'>
             <div className='campos'><TextField id="outlined-basic" label="Fecha de adquisición*" variant="outlined" fullWidth/></div>
             <div className='campos campos11'><TextField id="outlined-basic" label="Fecha de devolución*" variant="outlined" fullWidth/></div>
             </div>
             <div className='fila'>
             <div className='campos campocomplet'><TextField id="outlined-basic" label="Prócima ITV*" variant="outlined" fullWidth/></div>
             </div>



             </div>

          </div>
          
          
          
          <div className='contDerecho'>
          <div className=' parteDerechaAlta'>
             <div className='fila'>
             <div className='campos campocomplet'>
             <Autocomplete
              multiple
             id="tags-outlined"
             options={top100Films}
             getOptionLabel={(option) => option.title}
             defaultValue={[top100Films[13]]}
             filterSelectedOptions
             renderInput={(params) => (
             <TextField
              {...params}
              label="Usuarios"
            />
        )}
      />
               
               </div>
             
             </div>



             </div>
            <div className='parteDerechaBaja'>
             <div className='fila'>
             <div className='campos'>
             <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Contrato*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Contrato*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Contrato 1</MenuItem>
                <MenuItem value={20}>Contrato 2</MenuItem>
               
                </Select>
              </FormControl>
               
               </div>
             <div className='campos campos11'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Cliente*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Cliente*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Cliente 1</MenuItem>
                <MenuItem value={20}>Cliente 2</MenuItem>
               
                </Select>
              </FormControl>
             </div>
             </div>


             <div className='fila'>
             
             <div className='campos'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Rotulación</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Rotulación"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Rotulación 1</MenuItem>
                <MenuItem value={20}>Rotulación 2</MenuItem>
                <MenuItem value={30}>Rotulación 3</MenuItem>
                </Select>
              </FormControl>
             </div>
             <div className='campos campos11'>
             <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Segunda llave*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Segunda llave*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                </Select>
              </FormControl>
               
               </div>
             </div>


             <div className='fila'>
             <div className='campos'>
             <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Documentación*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Documentación*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
                </Select>
              </FormControl>
               
               </div>
             <div className='campos campos11'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Tipo de servicio*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Tipo de servicio*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Tipo de servicio 1</MenuItem>
                <MenuItem value={20}>Tipo de servicio 2</MenuItem>
                <MenuItem value={30}>Tipo de servicio 3</MenuItem>
                </Select>
              </FormControl>
             </div>
             </div>


             <div className='fila'>
             <div className='campos'><TextField id="outlined-basic" label="Servicio*" variant="outlined" fullWidth/></div>
             <div className='campos campos11'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Región*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Región*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Región 1</MenuItem>
                <MenuItem value={20}>Región 2</MenuItem>
                <MenuItem value={30}>Región 3</MenuItem>
                </Select>
              </FormControl>
             </div>
             </div>
             <div className='fila'>
             <div className='campos'> 
              <FormControl fullWidth >
                 <InputLabel id="demo-simple-select-label">Área*</InputLabel>
                 <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 value={age}
                 label="Área*"
                 onChange={handleChange}
                 >
                <MenuItem value={10}>Área 1</MenuItem>
                <MenuItem value={20}>Área 2</MenuItem>
                <MenuItem value={30}>Área 3</MenuItem>
                </Select>
              </FormControl>
             </div>
             <div className='campos campos11'><TextField id="outlined-basic" label="Provincia*" variant="outlined" fullWidth/></div>
             </div>
             <div className='fila'>
             <div className='campos'><TextField id="outlined-basic" label="Seguro*" variant="outlined" fullWidth/></div>
             <div className='campos campos11'><TextField id="outlined-basic" label="Solred*" variant="outlined" fullWidth/></div>
             </div>
             </div>


          </div>
          <div>


          </div>


           
         </div>
       
          
        </Box>
      </Modal>
    </div>

     </>
  );
}