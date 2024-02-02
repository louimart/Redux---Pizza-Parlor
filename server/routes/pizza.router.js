const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('GET /api/pizza');
  pool
    .query('SELECT * from "pizza";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error GET /api/pizza', error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const pizzaId = req.params.id;
  const queryText = `DELETE FROM "pizza" WHERE "id" = $1;`;
  pool
    .query(queryText, [pizzaId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
