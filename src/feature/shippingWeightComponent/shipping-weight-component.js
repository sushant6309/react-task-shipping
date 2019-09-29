import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export default function ShippingWeight(props) {
    const [values, setValues] = React.useState(0);

    function handleChange(val) {
        setValues(val);
        props.onWeightChange(val);
    }

    React.useEffect(() => {
        setValues(props.data);
    }, [props.data]);
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                Please Enter the weight of the shipping Item(s) in Kg.
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="standard-name"
                    type="number"
                    label="Name"
                    value={values}
                    onChange={event => handleChange(event.target.value)}
                    margin="normal"
                />
            </Grid>
        </Grid>
    )
}

ShippingWeight.propTypes = {
    onWeightChange: PropTypes.func.isRequired
};