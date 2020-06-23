import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// Base Styles
const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '100vh'
    },
    mock: {
        width: 886,
        height: 532,
        background: 'url(background.png)'
    },
    input: {
        position: 'relative',
        top: 60,
        left: 79,
        width: 793
    }
});

const emailOptions = [
    'theresa@outlook.com',
    'erictaylor@outlook.com',
    'mike@outlook.com',
    'freddy@outlook.com',
    'maria@outlook.com',
    'daniel@outlook.com',
    'peter@outlook.com',
];

const App = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item>
                    <div className={classes.mock}>
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={emailOptions}
                            getOptionLabel={option => option}
                            defaultValue={[emailOptions[0]]}
                            freeSolo
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    className={classes.input}
                                />
                            )}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default App;
