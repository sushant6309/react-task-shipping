import React from 'react';
import { Grid } from '@material-ui/core';
import Address from '../../core/components/address/address';
import PropTypes from 'prop-types';

export default function ShippingAddressComponent(props) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {props.message}
            </Grid>
            <Grid item xs={12}>
                <Address data={props.data} onAddressUpdate={(val) => {props.onAddressUpdate(val)}} />
            </Grid>
        </Grid>
    );
}

ShippingAddressComponent.propTypes = {
    message: PropTypes.string.isRequired,
    onAddressUpdate: PropTypes.func.isRequired
}