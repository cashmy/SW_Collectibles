// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// const useStyles = makeStyles((theme) => ({
//   root: {
//       flexGrow: 1,
//     },
//     grid: {
//       padding: theme.spacing(2.5),
//     },
//     paper: {
//       maxWidth: '600px',
//       padding: theme.spacing(2),
//       margin: 'auto',
//     },
//     alignButtons: {
//       padding: theme.spacing(2),
//       display: 'flex',
//       justifyContent: 'flex-end',
//     },
//     buttonSpacing: {
//       paddingLeft: theme.spacing(2)
//     }
// }));

// export default function PaymentForm() {
//   const classes = useStyles();
//   return (
//     <div >
//     <PageHeader 
//       title="Check Out"
//       subtitle="Creating an order from your shopping cart and submitting payment."
//       icon={<CheckCircleOutlineIcon/>}
//     />
//           <Grid container spacing={2} className={classes.grid} >
//          <Paper className={classes.paper} >
//       <Typography variant="h6" gutterBottom>
//         Payment method
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardNumber"
//             label="Card number"
//             fullWidth
//             autoComplete="cc-number"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cvv"
//             label="CVV"
//             helperText="Last three digits on signature strip"
//             fullWidth
//             autoComplete="cc-csc"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           />
//         </Grid>

//         <Grid item xs={12} className={classes.alignButtons} >
//               <Grid item className={classes.buttonSpacing}>
//                 <Button
//                   variant="contained"
//                 >
//                   Back
//                 </Button>
//               </Grid>

//               <Grid item className={classes.buttonSpacing}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                 >
//                   Next
//                 </Button>
//               </Grid>
//             </Grid>

//       </Grid>
//       </Paper>
//       </Grid>

//     </div>
//   );
// }