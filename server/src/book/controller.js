import BookModel from './model';

export default {
    // updateProfile: (req, res, next) => {
    //     req.user.comparedPassword(req.body.password, (err, good) => {
    //         if (err || !good) return res.status(401).send(err || 'Incorrect Password')
    //         const userId = req.user._id;
    //         const newProfile = {
    //             name: {
    //                 first: req.body.firstName, 
    //                 last: req.body.lastName
    //             }
    //         };
    //         delete newProfile.email;
    //         delete newProfile.phone;
    //         delete newProfile.password;
            
    //         BookModel.findByIdAndUpdate(userId, newProfile, {new: true})
    //         .then(() => res.sendStatus(200))
    //         .catch(next)
    //     })
    // }

    // when someone liked this book
    // addLike:(req, res, next) => {
        
    // }
}
