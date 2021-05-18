import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import "./ProductDetailView.css"

function ProductDetailView(){
    return(
        <Grid container spacing={1}>
            <Grid container item xs={4} spacing={3} className="grid">
                <FormGroup />
            </Grid>
            <Grid container item xs={4} spacing={3} className="grid">
            </Grid>
            <Grid container item xs={4} spacing={3} className="grid">
            </Grid>
        </Grid>
    )
}

export default ProductDetailView;