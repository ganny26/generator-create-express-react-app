import React, { Component } from 'react';
import MainAppBar from '../components/MainAppBar';
import Typography from '@material-ui/core/Typography';
class LandingContainer extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
         <Typography component="h5" variant="h5" gutterBottom>
        Landing Container
      </Typography>
      </div>
    );
  }
}

export default LandingContainer;