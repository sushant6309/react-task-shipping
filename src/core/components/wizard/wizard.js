import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import ShippingOptions from '../../../feature/shippingOptionsComponent/shipping-options-component';
import ShippingAddressComponent from '../../../feature/shippingAddressComponent/shipping-address-component';
import ShippingWeight from '../../../feature/shippingWeightComponent/shipping-weight-component';
import LabelConfirm from '../../../feature/LabelConfimComponent/label-confirm-component';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    inactive: {
        backgroundColor: '#b6bce2',
        color: '#ffffff',
    },
    active: {
        backgroundColor: '#3f51b5',
        color: '#ffffff',
    },
    button: {
        margin: theme.spacing(1),
    },
    nextbutton: {
        float: 'right',
    }

  }));
  
export default function Wizard(props) {
    const classes = useStyles();
    const steps = [
        'Senders Address',
        'Receivers Address',
        'Weight',
        'Shipping Options',
        'Confirm'
    ]
    const [stepNumber, setStepNumber] = React.useState(0);
    const [shippingLabel, setShippingLabel] = React.useState({
        from: {
            name: "", 
            street: "",
            city: "",
            state: "",
            zip: ""
            },
        to: {
            name: "",
            street: "",
            city: "",
            state: "",
            zip: "" 
        },   
        weight: 0,
        shippingOption: 1
    });

    function handleChange(type, value) {
        setShippingLabel({ ...shippingLabel, [type]: value })
    }

    function getStepComponent() {
        switch(stepNumber) {
            case 0:
             return (
                <ShippingAddressComponent data={shippingLabel.from} message="Please Enter Sender Address" onAddressUpdate={val => handleChange('from', val)} />
             );
             case 1:
             return (
                <ShippingAddressComponent data={shippingLabel.to} message="Please Enter Receiver Address" onAddressUpdate={val => handleChange('to', val)} />
             );
             case 2:
             return (
                <ShippingWeight data={shippingLabel.weight} onWeightChange={val => handleChange('weight', val)} />
             );
             case 3:
             return (
                <ShippingOptions  data={shippingLabel.shippingOption} onShippingOptionChange={val => handleChange('shippingOption', val)} />
             );
             case 4:
                 return (
                     <LabelConfirm data={shippingLabel} />
                 );
             default:
                return (<div> Unexpected Step </div>);
        }
    }

    function getHeaders() {
        return (
            <React.Fragment>
                {
                    steps.map((header, index) => (
                        <Grid item xs={index === 0 || index === 1 ? 3 : 2} key={header}>
                            <Paper className={[classes.paper, stepNumber === index ? classes.active : classes.inactive].join(' ')}>
                                {header}
                            </Paper>
                        </Grid>
                    ))
                }
            </ React.Fragment>
        )
    }

    function nextStep() {
        setStepNumber(stepNumber + 1);
    }

    function previousStep() {
        setStepNumber(stepNumber - 1);
    }
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <LinearProgress variant="determinate" value={((stepNumber + 1) * 20)} />
                    </Paper>
                </Grid>
                {getHeaders()}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {getStepComponent()}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    {
                        stepNumber !== 0 && (
                            <Button onClick={() => previousStep()} variant="contained" className={classes.button}>
                                Previous
                            </Button>
                        )
                    }
                    {
                        stepNumber !== 4 && (
                            <Button onClick={() => nextStep()} variant="contained" color="primary" className={[classes.button, classes.nextbutton].join(' ')}>
                                Next
                            </Button>
                        )
                    }
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
    );
    
}