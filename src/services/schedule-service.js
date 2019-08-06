
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

 async getSchedule(obj) {
   console.log('obj: ',obj)
    return (
     await fetch('/api/schedule', {
          method: 'POST',
          mode: 'cors',
          headers: {
          //   'Access-Control-Allow-Origin': 'http://localhost:3000',
          //   'Access-Control-Allow-Credentials': 'true',
          //   'Access-Control-Allow-Methods': 'POST',
          //   'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(obj),
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
