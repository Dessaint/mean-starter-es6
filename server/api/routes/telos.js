import express from 'express';
import Telo from '../models/telo.js';

let router = express.Router();

module.exports = (app) => {

    var telo = new Telo();

    router.get('/', telo.findAll);

    router.get('/:id', telo.findById);

    router.post('/', telo.create);

    router.put('/:id', telo.update);

    router.delete('/:id', telo.delete);

    app.use('/telos', router);

}
