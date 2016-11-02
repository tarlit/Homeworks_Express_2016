let encryption = require('../utilities/encryption')

module.exports = {
    register: (req, res) => {
        res.render('users/register')
    },
    create: (req, res) => {
        let user = req.body

        if (user.password !== user.confirmPassword) {
            res.render('users/register', { globalError: 'Password does not match!' })
        } else {
            user.salt = encryption.generateSalt()
            user.hashedPassword = encryption.generateHashedPassword(user.salt, user.password)
            res.send('It Works!')
        }
    }
}