import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { shippingOptions } from '../../utils/utils';

const currencies = [
    {
      value: shippingOptions.ground,
      label: 'Ground',
    },
    {
      value: shippingOptions.priority,
      label: 'Priority',
    },
  ];
  
export default function ShippingOptions(props) {
    const [values, setValues] = React.useState('1');

    const handleChange = val => {
        setValues(val);
        props.onShippingOptionChange(val);
    };

    React.useEffect(() => {
        setValues(props.data);
    }, [props.data]);

    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                Please select your shipping option.
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={values}
                    onChange={evt => handleChange(evt.target.value)}
                    helperText="Please select your shipping option"
                    margin="normal"
                    fullWidth
                >
                    {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
            </Grid>
        </Grid>
    )
}

ShippingOptions.propTypes = {
    onShippingOptionChange: PropTypes.func.isRequired
};