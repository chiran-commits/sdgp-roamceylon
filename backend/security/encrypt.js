const bcrypt = require('bcrypt');
//used to encrypt the password

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    //salting the password to ensure the password is secure
    bcrypt.genSalt(12, (err, salt) => {
        if (err) {
          reject(err);
        }
        bcrypt.hash(password,salt,(err,hash)=>{
          if(err){
              reject(err)
          }
          resolve(hash)
      })

    })
   



  });
};

//functiom is used to compare the password with the hashed password

const comparePassword = (password, hashPassword) => {
    return bcrypt.compare(password,hashPassword)

}
module.exports = {encryptPassword,comparePassword}