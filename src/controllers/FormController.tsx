import Answers from '../interfaces/FormAnswsers.tsx';
import calculateScore from '../helpers/CalculateScore.tsx';
import database from '../database/database.tsx';


export default function FormController(e : React.FormEvent, answers : Answers): void {
    e.preventDefault()

    const score = calculateScore(answers)
    

    console.log(score)
    console.log(database)
}