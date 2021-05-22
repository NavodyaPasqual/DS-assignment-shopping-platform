import { makeStyles } from '@material-ui/core/styles';
import {borderRadius} from "@material-ui/system";

export default makeStyles((theme) => ({
    paper: {
        padding:'30px 150px 30px 150px',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'rgba(234,239,234,0.94)'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },


}));