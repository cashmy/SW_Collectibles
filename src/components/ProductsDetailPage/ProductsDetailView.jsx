import React from 'react';
import "./ProductDetailView.css";
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';


function ProductsDetailView() {
    return (
        <div>
        <Grid container direction="row" spacing={5} style={{marginTop: "2rem"}}></Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={5}>
                <Grid container item xs={4} spacing={3} className="grid">
                    <div>
                    <img src="https://www.nin9s.net/wp-content/uploads/2019/12/Loot-Crate-DX-Light-Saber-February-2018-0007-733x733-1.jpg" alt="Collectible Item" className="product__img"/>
                    </div>
                
                </Grid>
                <Grid container item xs={4} spacing={3} className="grid">
                    <div className="product__title">
                        <h1>Product Title</h1>
                    </div>
                    <div className="product__description">
                        <p>Product Description</p>
                    </div>
                </Grid>
                <Grid container item xs={4} spacing={3} className="grid">
                    <div>
                        <h1>Hello</h1>
                    </div>
                </Grid>
            </Grid>
        <Grid container direction="row" spacing={5} style={{marginBottom: "2rem"}}></Grid>
        </div>
    )
}

export default ProductsDetailView
