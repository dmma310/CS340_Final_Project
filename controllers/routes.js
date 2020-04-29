const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../config/connection').pool;

// // Need mysql running
// pool.getConnection((err, connection) => {
// if (err){
//     throw err;
//     return;
//     }
//     console.log("success!");
// });

/* RESTFUL Routes*/
router.get('/', (req, res) => {
    res.json('Home page');
})

router.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//General error handler. NOTE: next can be used to chain
router.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

module.exports = router;