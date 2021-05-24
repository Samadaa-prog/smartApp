import logo from './logo.svg';
import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Container, Typography, paper, Card, CardMedia, CardActions, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

import img from "C:/Users/Samadaa/react-intro/src/images/image.jpg";
import flaglogo from "C:/Users/Samadaa/react-intro/src/images/flaglogo.jpg";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import { DriveEta } from '@material-ui/icons';


function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const cards = [1];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backGroundImage: "url(https://everyfad.com/images/h2048/4c2592cf-833e-11e7-a9be-MLTAHiZXnGlsun2f5DijNXOC.png)",
      backgroundPosition: "center"
    },
  },
  mainFeaturesPost:{
    position: "relative",
    backgroundPosition: "center"
  },

  CardMedia:{
    paddingTop: "50.25%",
    backGroundImage: 'url(https://everyfad.com/images/h2048/4c2592cf-833e-11e7-a9be-MLTAHiZXnGlsun2f5DijNXOC.png)'
  },
   icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  
}));



function App() {

  const clases = useStyles();


  return (
    <>
    <div   style={ {backgroundImage: `url(${img})`,
     backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"} }>
    <div className = {clases.mainFeaturesPost}>
      <Container>
        <Typography variant ='h4' align = "center" color = "textPrimary" gutterBottom >
          Угадай Флаг страны
        </Typography>
      </Container>
    </div>

   
                <div align ="center" >
                   <box>
                     <img src = {flaglogo} />
                   </box>
                </div>


        
    <div className = {clases.mainFeaturesPost}>
      <Container>
        <Typography variant ='h6' align = "center" color = "textPrimary" gutterBottom>
          Выберите уровень сложности
        </Typography>
      </Container>
    </div>



                 <div align = "center">

                  <FormControl component="fieldset">
                      
                         <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                              <FormControlLabel value="Сложный" control={<StyledRadio />} label="Сложный" />
                              <FormControlLabel value="Средний" control={<StyledRadio />} label="Средний" />
                             <FormControlLabel value="Легкий" control={<StyledRadio />} label="Легкий" />
                          </RadioGroup>
                  </FormControl>
                  </div>






    <div className="App">
      <Button variant="contained">
        Start
      </Button>
    </div>
    </div>
    </>
  );
}


export default App;
