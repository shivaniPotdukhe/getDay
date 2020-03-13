import moment from 'moment';
class Controller {

getDay = (date) => {
  console.log('Controller:getDay:date: ', date);
  const day = moment(date);
  console.log('Controller:getDay:day: ', day);
}

}

export default new Controller();