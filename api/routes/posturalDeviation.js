const express = require('express')
const routes = express.Router()
const PosturalDeviation = require('../model/PosturalDeviation')
const Auth = require("../model/Auth");

routes.post('/create', Auth.required, PosturalDeviation.createPosturalDeviation)

routes.get('/read', Auth.required, PosturalDeviation.readPosturalDeviation)

routes.delete('/delete/:id', Auth.required, PosturalDeviation.deletePosturalDeviation)

routes.put('/update/:id', Auth.required, PosturalDeviation.updatePosturalDeviation)

module.exports = routes