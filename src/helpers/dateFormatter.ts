export const dateFormatter = {
  switchDayOfTheWeek: (day: number) => {
    switch (day) {
      case 0:
        'Domingo';
        break;
      case 1:
        'Segunda-feira';
        break;
      case 2:
        'Terça-feira';
        break;
      case 3:
        'Quarta-feira';
        break;
      case 4:
        'Quinta-feira';
        break;
      case 5:
        'Sexta-feira';
        break;
      case 6:
        'Sábado';
        break;
      default:
        return 'this day does not exist';
    }
  },
  switchMonth: (month: number) => {
    switch (month) {
      case 0:
        'Janeiro';
        break;
      case 1:
        'Fevereiro';
        break;
      case 2:
        'Março';
        break;
      case 3:
        'Abril';
        break;
      case 4:
        'Maio';
        break;
      case 5:
        'Junho';
        break;
      case 6:
        'Julho';
        break;
      case 7:
        'Agosto';
        break;
      case 8:
        'Setembro';
        break;
      case 9:
        'Outubro';
        break;
      case 10:
        'Novembro';
        break;
      case 11:
        'Dezembro';
        break;
      default:
        return 'this day does not exist';
    }
  },
  getDate: () => {
    const today = new Date();

    const dayOfTheWeek = dateFormatter.switchDayOfTheWeek(today.getDay());
    const day = today.getDate();
    const month = dateFormatter.switchMonth(today.getMonth());
    const year = today.getFullYear();

    return `${dayOfTheWeek}, ${
      day >= 10 ? day : `0${day}`
    } de ${month} de ${year}`;
  },
  formatDate: (secs: number) => {
    let fullDate = new Date(secs * 1000);
    let hour = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();

    return `${hour >= 10 ? hour : `0${hour}`}:${
      minutes >= 10 ? minutes : `0${minutes}`
    }:${seconds >= 10 ? seconds : `0${seconds}`}`;
  },
  getHourFromDateAndFormatIt: (secs: number) => {
    let fullDate = new Date(secs * 1000);
    let hour = fullDate.getHours();

    return `${hour > 10 ? hour : `0${hour}`}:00`;
  },
};
