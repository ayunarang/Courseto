const express = require("express");
const cors = require("cors");
const cookieParser= require('cookie-parser')
require('dotenv').config();

const mongoDb = require("./config/db.js");

const user_routes = require('./routes/User.js');

const app = express();
const PORT = process.env.PORT || 6001;

app.use(express.json());
app.use(cookieParser());

const corsOptions= {
    origin: "http://localhost:3000",
    credentials: true
};
app.use(cors(corsOptions));

app.use('/api', user_routes);

app.get('/', async (req, res) => {
    res.send('HELLO SERVER');
});

const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server running: http://localhost:${PORT}`);
    });
};
startServer();

mongoDb();

