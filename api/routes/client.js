let models  = require('../models');
let express = require('express');
let router  = express.Router();

router.route('/')

  .get((req, res) => {
    models.client
      .findAll({ include: [models.provider] })
      .then((clients) => {
        if (req) {
          models.provider.findAll().then((providers) => {
            res.statusCode = 200;
            return res.json({ clients: clients, providers: providers });
          });
        }
      }
    );
  })

  .post((req, res) => {
    const data = req.body;
    const providerIds = data.providerIds;
    delete data.providerIds;
    
    models.client.build(data).save()
      .then((client) => client.setProviders(providerIds))
      .then(() => {
        res.statusCode = 201;
        return res.json({ message: 'Client created successfully.' });
      });
  });


router.route('/:client_id')

  .get((req, res, next) => {
    models.client.findOne({
      where: { id: req.params.client_id },
      include: [models.provider]
    })
    .then((client) => {
      if (client) {
        res.json(client);
      } else {
        res.statusCode = 404;
        res.json({ error: 'Client not found.' });
      }
    });
  })

  .put((req, res) => {
    const data = req.body;
    const providerIds = data.providerIds;
    delete data.providerIds;
    delete data.id;

    models.client
      .findOne({ where: { id: req.params.client_id }})
      .then((client) => client.updateAttributes(data))
      .then((client) => client.setProviders(providerIds))
      .then(() => {
        res.statusCode = 203;
        return res.json({ message: 'Client edited successfully.' });
      });
  })

  .delete((req, res, next) => {
    const id = req.params.client_id;
    models.client
      .findOne({ where : { id : id } })
      .then((client) => {
        if (client) {
          return client.setProviders([]).then(() => client); 
        } else {
          res.statusCode = 404;
          res.json({ error: 'Client not found.' });
        }
      })
      .then((client) => client.destroy())
      .then(() => res.json({ message: 'Client deleted successfully.' }))
  });

module.exports = router;