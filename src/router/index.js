const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get('/allstation',async(req, res)=>{
    let key = 'f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48'
    // Список всех доступных станций
    await fetch(`https://api.rasp.yandex.net/v3.0/stations_list/?apikey=${key}&lang=ru_RU&format=json`)
    .then((body)=>{
        return body.json()
    })
    .then((b)=>{
        res.send(b)
    })
    .catch((err)=>{console.log('error: ',err)
    })
})

router.post('/schedule', async (req, res) => {
    let key = 'f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48'
    let station = 's9600213';
    let transport = 'suburban';
    let direction = 'arrival';
    let date = '2019-08-05';
    // Расписание рейсов по станции
    await fetch(`https://api.rasp.yandex.net/v3.0/schedule/?apikey=${key}&station=${station}&transport_types=${transport}&date=${date}&direction=${direction}`)
        .then(function (body) {
            return body.json()
        })
        .then((b) => {
   //         console.log(b)
            res.send(b)
        })
        .catch((err) => console.log('error: ', err))
});

module.exports = router;