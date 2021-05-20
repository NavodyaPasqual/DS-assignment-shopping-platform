import { makeStyles } from '@material-ui/core/styles';
import {deepOrange, deepPurple} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        margin: '0px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        margin:'0px 10px 0px 10px',
        color:'#fff',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        backgroundColor:"#309399",
    },
}));