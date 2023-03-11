let cors = require('cors');
let express = require('express');
let mysql = require('mysql2');
require('dotenv').config()
let app = express();

app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req, res) => {
    res.send('Heloo Nattay')
})

app.get('/attractions', (req, res) => {
    connection.query('SELECT * FROM attractions', 
        function(err, results, fields) {
            res.send(results)
        }
    )
})


app.listen(process.env.PORT || 3000)
