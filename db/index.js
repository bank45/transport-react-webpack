const fetch = require('node-fetch');


/*  
    Оюработка API: вле станции
    Выборка кодов, названий и типов станций 
    И запись в переменную 
*/

const items = {}
let counter = 0
fetch('http://localhost:5000/countries')
    .then(res => res.json())
    .then((data) => {
        data.forEach((country, index) => {
            country.regions.forEach((region, num) => {
                region.settlements.forEach((settlement) => {
                    settlement.stations.forEach((station) => {
                        items[station.codes.yandex_code] = [country.title, region.title, settlement.title, station.title, station.transport_type]
                        counter++
                    })
                })

            })

        })

        console.log(counter)
        let s = 'suburban'
        const str = new RegExp(s, 'i')

        for (let s in items) {
            if (str.test(items[s][4])) {
                console.log(items[s][3], items[s][4], s)
            }
        }
    })
