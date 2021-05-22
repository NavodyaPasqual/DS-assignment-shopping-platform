import {Link} from "react-router-dom";
import "../style/dilivaryStyle.css"
import {Container,Paper,Radio,TextField,FormControlLabel,RadioGroup,Typography} from "@material-ui/core"
import dilivary from "../style/dilivary";

const handleChange= ()=>{

}
const DeliveryServiceScreen = () =>{
    const classes = dilivary;

    return (
        <Container className="deli-container" maxWidth="md">
            <Paper className={classes.paper}>
                <Typography variant="h5">Dilivery Details</Typography>
                <TextField name="name" label="Full name"></TextField>
                <TextField name="country"  label="Country"></TextField>
                <TextField name="city" label="City"></TextField>
                <TextField name="address" label="Address"></TextField>
                <TextField name="postalCode" label="Postal Code"></TextField>
                <TextField name="contact" label="Contact number"></TextField>

                <Typography variant="h8">Dilivery Option</Typography>
                <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                <div>
                    <Link to="/payment">
                        <button>Payment</button>
                    </Link>
                </div>
            </Paper>

        </Container>
    )
};

export default DeliveryServiceScreen