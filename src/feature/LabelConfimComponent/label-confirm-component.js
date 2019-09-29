import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { shippingRate, shippingOptions } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paperSecondary: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    }

  }));
export default function LabelConfirm(props) {

    const { data } = props;
    const { weight, shippingOption } = data;

    const classes = useStyles();

    function getShippingAmount() {
        return weight * shippingRate *
        (shippingOption === shippingOptions.ground ? 1 : 1.5)
    }

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper} >
                        <b>Confirm details</b>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} >
                        <b>Shipping Amount : </b>{getShippingAmount()}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperSecondary} >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <b>Name: </b>{data.from.name}
                            </Grid>
                            <Grid item xs={12}>
                                <b>Street: </b>{data.from.street}
                            </Grid>
                            <Grid item xs={12}>
                                <b>City: </b>{data.from.city}
                            </Grid>
                            <Grid item xs={12}>
                                <b>State: </b>{data.from.state}
                            </Grid>
                            <Grid item xs={12}>
                                <b>Zip: </b>{data.from.zip}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperSecondary} >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <b>Name: </b>{data.to.name}
                            </Grid>
                            <Grid item xs={12}>
                                <b>Street: </b>{data.to.street}
                            </Grid>
                            <Grid item xs={12}>
                                <b>City: </b>{data.to.city}
                            </Grid>
                            <Grid item xs={12}>
                                <b>State: </b>{data.to.state}
                            </Grid>
                            <Grid item xs={12}>
                                <b>Zip: </b>{data.to.zip}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperSecondary}>
                        <b>Weight :</b> {weight}
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paperSecondary}>
                        <b>Shipping Option Selected: </b>{shippingOption === 1 ? 'Ground' :  'Priority'}
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}