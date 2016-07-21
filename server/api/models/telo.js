import mongoose from 'mongoose';

const teloSchema = new mongoose.Schema({
    nom: String,
    telephone: String
});

let model = mongoose.model('Telo', teloSchema);

export default class Telo {

    findAll(req, res) {
        model.find({}, (err, telos) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(telos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, telo) => {
            if (err || !telo) {
                res.sendStatus(403);
            } else {
                res.json(telo);
            }
        });
    }

    create(req, res) {
        model.create({
                nom: req.body.nom,
                telephone: req.body.telephone
            },
            (err, telo) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(telo);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom: req.body.nom,
            telephone: req.body.telephone
        }, (err, telo) => {
            if (err || !telo) {
                res.status(500).send(err.message);
            } else {
                res.json(telo);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
