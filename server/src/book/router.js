import BookController from './controller';

const router = require('express').Router();

router.get('/profile', (req, res)=>{
    res.send(req.book);
})

router.post('/profile', BookController.updateProfile)

export default router;