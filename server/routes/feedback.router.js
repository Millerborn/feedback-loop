const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST new feedback
router.post('/', async (req, res) => {
    const review = await pool.connect();
    try {
        const {
            feeling,
            understanding,
            support,
            comments
        } = req.body;
        await review.query('BEGIN')
        const feedbackInsertResults = await review.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);
        const reviewId = orderInsertResults.rows[0].id;
        
        await Promise.all(pizzas.map(pizza => {
            const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
            const insertLineItemValues = [reviewId, pizza.id, pizza.quantity];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await review.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await review.query('ROLLBACK')
        console.log('Error POST /feedback', error);
        res.sendStatus(500);
    } finally {
        review.release()
    }
});

// DELETE feedback
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /feedback', error);
        res.sendStatus(500);
    })
});


module.exports = router;