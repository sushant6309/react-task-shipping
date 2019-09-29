import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export default function Address(props) {
    const [values, setValues] = React.useState({
        name: '',
        street: '',
        state: '',
        city: '',
        zip: '',
    });

    React.useEffect(() => {
        setValues({ ...props.data});
    }, [props.data]);

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        props.onAddressUpdate({ ...values, [name]: event.target.value });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Name"
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="standard-name"
                    label="Street"
                    value={values.street}
                    onChange={handleChange('street')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                fullWidth
                    id="standard-name"
                    label="State"
                    value={values.state}
                    onChange={handleChange('state')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                fullWidth
                    id="standard-name"
                    label="City"
                    value={values.city}
                    onChange={handleChange('city')}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                fullWidth
                    id="standard-name"
                    label="Zip"
                    value={values.zip}
                    onChange={handleChange('zip')}
                    margin="normal"
                />
            </Grid>
        </Grid>
    )
}

Address.propTypes= {
    onAddressUpdate: PropTypes.func.isRequired,
}
