"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var mongoose_1 = __importDefault(require("./../db/mongoose"));
var saltRounds = 10;
var UserSchema = new mongoose_1.default.Schema({
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
var User = mongoose_1.default.model('User', UserSchema);
exports.default = User;
// module.exports = { User };
//# sourceMappingURL=user.js.map