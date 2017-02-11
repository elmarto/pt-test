let models  = require('../models');
let express = require('express');
let router  = express.Router();

router.route('/')

  .get((req, res) => {
    models.provider.findAll()
    .then((providers) => res.json({ providers: providers }));
  })

  .post((req, res) => {
    models.provider.build(req.body).save()
      .then((provider) => {
        res.statusCode = 201;
        return res.json({ 
          provider: provider,
          message: 'Provider created successfully.' 
        });
      });
  });

router.route('/:provider_id')

  .delete((req, res) => {
    models.provider.destroy({
      where: { id: req.params.provider_id }
    }).then(() => {
      return res.json({ message: 'Provider deleted successfully.'});
    });
  });

module.exports = router;