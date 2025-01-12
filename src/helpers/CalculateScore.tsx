import Answers from "../interfaces/FormAnswsers";

export default function calculateScore(answers: Answers): number {
    const salary = parseInt(answers.salary.replace(/\D/g, ''))
    const carValue = parseInt(answers.carValue.replace(/\D/g, ''))
    const carSportiness = parseInt(answers.carSportiness)
    const carAge = parseInt(answers.carAge)
    const carSize = answers.carSize as 'Espaçoso' | 'Médio' | 'Compacto'
    const carSeats = parseInt(answers.carSeats)
    const dailyKm = parseInt(answers.dailyKm.replace(/\D/g, ''))


    const carSizeValues = {
        Espaçoso: 9.018684522,
        Médio: 8.356034533,
        Compacto:7.703402174
    }

    const coeficients = {
        carValue: 124869.3297,
        carSportiness: 51.6498,
        carAge: -7.0555,
        carSeats:  0.1102,
        carSize:  0.4570,
        salary:  5566.8419,
        dailyKm:  8.2803
    }

    const score = (carValue * coeficients.carValue) + (carSportiness * coeficients.carSportiness) + (carAge * coeficients.carAge) + (carSeats * coeficients.carSeats) + (salary * coeficients.salary) + (dailyKm * coeficients.dailyKm) + (carSizeValues[carSize] * coeficients.carSize)

    console.log(answers)

    return score

}