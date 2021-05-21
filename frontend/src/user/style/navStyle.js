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
        justifyContent:'center',
        margin:'0px 10px 0px 10px',
        color:'#242321',
    },
    logout:{
        fontSize:'12px',
        fontWeight:'bold',
        color:'#662b2b',
        width:'50px',
        margin:'0px 10px 0px 0px',
        padding:'0px 10px 0px 10px',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        backgroundColor:"#309399",
    },
    navBtn:{
        fontSize:'12px',
        fontWeight:'bold',
        color:'#309298',
        width:'50px',
        margin:'0px 10px 0px 0px',
        padding:'9px 10px 10px 10px',
    },
    navLogin:{
        backgroundColor:'FF309298',
        color:'#619484',
        textShadow:'1px 1px 6px #AAFFAA'
    },
}));