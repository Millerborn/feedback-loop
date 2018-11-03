const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route to get information from database to admin view
router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

//  POST route to add new feedback to the database
router.post('/', (req, res) => {
    const feedback = req.body;
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES 
  ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            console.log(`Added to the database`, feedback);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

// DELETE feedback to use in admin view
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(sqlText, [reqId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 
        })
})


module.exports = router;