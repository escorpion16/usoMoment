let moment = require('moment');

moment.locale('es')

let getDate = () => {
    return moment()
}

// 1.- Cuantos dias tuvo el mes de febrero de 1998?

const queDia = (days) => {
    let daysFeb = moment(days).daysInMonth()
    return daysFeb
}


// 2.- Que dia fue el 2018-01-13?
const diasFebrero = (day) => {
    let date2 = moment(day).format('dddd')
    return date2
}


// 3.- En base a la siguiente lista, regresa una lista de fechas que correspondan al día actual.
let dateList = [
    '2020-08-14',
    '2019-08-11',
    '2020-08-11',
    '2020-06-19',
    '2018-10-08',
    '2020-08-14',
    '2020-08-14',
    '2020-08-12'
]

let fechaActual =  getDate().format('YYYY-MM-DD')

const isToday = (list) => {
    let dateFilter = []
    list.filter(date => {date === fechaActual ? dateFilter.push(date) : null})

    return dateFilter
}


// 4.- De la siguiente lista de fechas, regresa aquellas que sean menores a la fecha de hoy
const filtrarFechasMenores = (list) => {
    let fechasMenores = []

    dateList.filter(date => date < fechaActual? fechasMenores.push(date) : null)
    return fechasMenores
}

// 5.- De la siguiente lista de fechas, regresa aquellas que sean mayores a la fecha de hoy

const filtrarFechasMayores = (list) => {
    let fechasMayores = []

}

console.log(queDia([1998, 1]));
console.log(diasFebrero([2018,1,13]))
console.log(isToday(dateList))
console.log(filtrarFechasMenores(dateList))
console.log(filtrarFechasMayores(dateList))