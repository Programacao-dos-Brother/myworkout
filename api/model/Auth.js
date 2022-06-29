const jwt = require('jsonwebtoken')
const User = require('../model/User')

module.exports.login = async (email, password) => {
    try {
        const user = await User.login(email, password)
        if (user && user.error === 1 ) {
            return {error: 'Usuário e/ou senha inválido.'}
        } else if (user && user.error === 2) {
            return {error: 'Esse usuário não está ativo.'}
        } else if (user._id) {
            const token =  await jwt.sign({user: user._id, firstName: user.firstName, email: user.email, lastName: user.lastName}, secretKeyToken, {expiresIn: '30d'})
            return {token}
        } else {
            return {
                error: 'User not found.'
            }
        }
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.decodeToken = async (token) => {
    try {
        if (token) {
            return await jwt.verify(token, secretKeyToken)
        } else {
            return {
                error: 'Token not valid.'
            }
        }
    } catch (e) {
        return e
    }
}

exports.required = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        req.usuario = decode
        next()
    }
    catch (error) {
        return res.status(401).send({ mensagem: 'Falha na autenticação.' })
    }
}
