const jwt = require('jsonwebtoken')
const User = require('../schema/user')
const bcrypt = require('bcrypt')

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if ( !user || user === null ) {
            return res.status(500).send({ error: 'Usuário e/ou senha inválido.' })
        } else {
            if (await bcrypt.compareSync(req.body.password, user.password)) {
                const token = await jwt.sign(
                    {
                        user: user._id,
                        firstName: user.firstName,
                        email: user.email,
                        lastName: user.lastName
                    },
                    process.env.JWT_KEY,
                    {expiresIn: '1h'}
                )
                return res.status(200).send({token})
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
