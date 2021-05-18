import React from 'react';
import "./ProductDetailView.css";
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';


function ProductsDetailView() {
    return (
        <div>
        <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
            <Grid container item xs={4} spacing={3} className="grid">
                <div>
                    <h1>Hello</h1>
                </div>
            </Grid>
            <Grid container item xs={4} spacing={3} className="grid">
                <div>
                    <h1>Hello</h1>
                </div>
            </Grid>
            <Grid container item xs={4} spacing={3} className="grid">
                <div>
                    <h1>Hello</h1>
                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default ProductsDetailView
