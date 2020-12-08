import bcrypt from 'bcrypt';
import mongoose from './../db/mongoose';


const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    username: {
        type: 'String',
        require: 'true',
        unique: 'true'
    },
    
    password: {
        type: 'String',
        required: 'true'
    },

    name: {
        type: 'String'
    }
});

// UserSchema.pre('save', function(next) {
//     // Check if document is new or a new password has been set
//     if (this.isNew || this.isModified('password')) {
//       // Saving reference to this because of changing scopes
//       const document = this;
//       bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
//         if (err) {
//           next(err);
//         }
//         else {
//           document.password = hashedPassword;
//           next();
//         }
//       });
//     } else {
//       next();
//     }
// });

// UserSchema.methods.isCorrectPassword = function(password, callback){
//     bcrypt.compare(password, this.password, function(err, same) {
//       if (err) {
//         callback(err);
//       } else {
//         callback(err, same);
//       }
//     });
// }

//    // UserSchema.methods.isCorrectPassword = (password) => {
//   //   // console.log(bcrypt.compare(password, this.password));
//   //     return new Promise((resolve, reject) => {
//   //     bcrypt.compare(password, this.password, (err, res) => {
//   //         if (res) {
//   //             resolve(this);
//   //         } else {
//   //             reject();
//   //         }
//   //     });
//   //   });
//   // }

const User = mongoose.model('User', UserSchema);

export { User as default };
// module.exports = { User };