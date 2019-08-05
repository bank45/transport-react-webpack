
export default class ScheduleService {

  async getAllStation() {
    return (
     await fetch('/api/allstation')
        .then(response => {
          return  response.json()
        })
        .then((data) => {
     //     console.log('Service AllStation: ', data)
          return  data
        })
        .catch(error => console.log(error))
    )
  }; 

 async getSchedule() {
    return (
     await fetch('/api/schedule'
        , {
          method: 'POST',
          mode: 'no-cors',
          body: '',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          return  response.json()
        })
        .then((data) => {
      //    console.log('Service: ', data)
          return  data
        })
        .catch(error => console.log(error))
    )
  };
};
