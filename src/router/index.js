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

router.post('/schedule', async function (req, res) {
    console.log('req.body: ',req.body)
    let key = 'f4dd2c3f-2280-4d37-8bb9-fcdb16a54e48'
    let station = 's9600213';
    let transport_types = req.body.transport_types ;
    let direction = 'arrival';
    let date = req.body.datestart ;
    // Расписание рейсов по станции
    await fetch(`https://api.rasp.yandex.net/v3.0/schedule/?apikey=${key}&station=${station}&transport_types=${transport_types}&date=${date}&direction=${direction}`)
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