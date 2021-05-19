import  express from 'express';

const router = express.Router();

router.get('/' ,(req,res) => {
    res.send("THIS SEND");
});

export default  router;