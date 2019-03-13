import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'

const App = () =>  {
    return(
        <Fragment>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justify="center"
                align-items="center"
            />
            
        </Fragment>
    );
}

export default App;
