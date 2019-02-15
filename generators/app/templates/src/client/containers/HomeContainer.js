import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class HomeContainer extends Component {
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
        <Typography component="h5" variant="h5" gutterBottom>
        HomeContainer
      </Typography>

      </div>
    );
  }
}

export default HomeContainer;