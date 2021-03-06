import BookModel from './model';

export default {
    updateProfile: (req, res, next) => {
        req.book.comparedPassword(req.body.password, (err, good) => {
            if (err || !good) return res.status(401).send(err || 'Incorrect Password')
            const bookId = req.book._id;
            const newProfile = {
                book:{
                    title: req.body.title,
                    catogory: req.body.catogory,
                    discription: req.body.discription,
                },
            };
            
            BookModel.findByIdAndUpdate(bookId, newProfile, {new: true})
            .then(() => res.sendStatus(200))
            .catch(next)
        })
    },

    newId:() => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // when someone liked this book
    // addLike:(req, res, next) => {
        
    // }
}
