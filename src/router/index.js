const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.post('/schedule', async (req, res) => {
    let key = 'f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48'
    let station = 's9600213';
    let transport = 'suburban';
    let direction = 'arrival';
    let date = '2019-07-23';
    // Расписание рейсов по станции
    await fetch(`https://api.rasp.yandex.net/v3.0/schedule/?apikey=${key}&station=${station}&transport_types=${transport}&date=${date}&direction=${direction}`)
        .then(function (body) {
            return body.json()
        })
        .then((b) => {
   //         console.log(b)
            res.send(b)
        })
        .catch((err) => console.log('error', err))
});

module.exports = router;