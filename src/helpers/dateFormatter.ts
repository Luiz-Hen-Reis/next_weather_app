export const dateFormatter = {
  switchDayOfTheWeek: (day: number) => {
    switch (day) {
      case 0:
        return 'Domingo';
        break;
      case 1:
        return 'Segunda-feira';
        break;
      case 2:
        return 'Terça-feira';
        break;
      case 3:
        return 'Quarta-feira';
        break;
      case 4:
        return 'Quinta-feira';
        break;
      case 5:
        return 'Sexta-feira';
        break;
      case 6:
        return 'Sábado';
        break;
      default:
        return 'this day does not exist';
    }
  },
  switchMonth: (month: number) => {
    switch (month) {
      case 0:
        return 'Janeiro';
        break;
      case 1:
        return 'Fevereiro';
        break;
      case 2:
        return 'Março';
        break;
      case 3:
        return 'Abril';
        break;
      case 4:
        return 'Maio';
        break;
      case 5:
        return 'Junho';
        break;
      case 6:
        return 'Julho';
        break;
      case 7:
        return 'Agosto';
        break;
      case 8:
        return 'Setembro';
        break;
      case 9:
        return 'Outubro';
        break;
      case 10:
        return 'Novembro';
        break;
      case 11:
        return 'Dezembro';
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
