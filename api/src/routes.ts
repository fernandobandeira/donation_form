import { pick } from 'lodash';
import * as express from 'express';
import { Model } from 'mongoose';

export default (
  { app, model } : { app: express.Application, model: Model<any> },
) => {
  app.get('/', (req, res) => {
    model.find()
      .then(donors => res.send({ donors }));
  });

  app.get('/:id', (req, res) => {
    model.findById(req.params.id)
      .then((donor) => {
        if (!donor) {
          return res.status(404).send({});
        }

        res.send({ donor });
      })
      .catch(e => res.status(400).send({}));
  });

  app.post('/', (req, res) => {
    new model(pick(req.body, [
      '_id',
      'honor',
      'amount',
      'frequency',
      'honor_name',
      'honor_comment',
      'anonymous',
      'first_name',
      'last_name',
      'email',
      'phone',
      'receive_updates',
      'card_number',
      'cvv',
      'expiration',
    ]))
      .save()
      .then(donor => res.send({ donor }))
      .catch(e => res.status(400).send({}));
  });

  app.patch('/:id', (req, res) => {
    model.findById(req.params.id)
      .then((donor) => {
        if (!donor) {
          return res.status(404).send({});
        }

        const { _version } = req.body;
        if (_version && _version !== donor._version) {
          return res.status(409).send({ donor });
        }

        donor.set(pick(req.body, [
          'honor',
          'amount',
          'frequency',
          'honor_name',
          'honor_comment',
          'anonymous',
          'first_name',
          'last_name',
          'email',
          'phone',
          'receive_updates',
          'card_number',
          'cvv',
          'expiration',
        ]));

        donor.save()
          .then(donor => res.send({ donor }));             
      })
      .catch(e => res.status(400).send({}));
  });

  app.delete('/:id', (req, res) => {
    model.findById(req.params.id)
      .then((donor) => {
        if (!donor) {
          return res.status(404).send({});
        }

        donor.remove()
          .then(donor => res.send({ donor }));        
      })
      .catch(e => res.status(400).send(e));
  });
};
