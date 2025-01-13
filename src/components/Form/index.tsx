import './Form.css'
import { useState } from 'react'
import InputText from '../InputText'
import InputSlide from '../InputSlide'
import SelectOption from '../SelectOption'
import InputNumber from '../InputNumber'
import FormButton from '../FormButton'
import Answers from '../../interfaces/FormAnswsers'
import FormController from '../../controllers/FormController'



export default function Form () {

    const [salary, setSalary] = useState("")
    const [carValue, setCarValue] = useState("16274")
    const [carSportiness, setCarSportiness] = useState("125")
    const [carAge, setCarAge] = useState("0")
    const [carSize, setCarSize] = useState("Espaçoso")
    const [carSeats, setCarSeats] = useState("2")
    const [dailyKm, setDailyKm] = useState("")


    const answers : Answers = {
        salary,
        carValue,
        carSportiness,
        carAge,
        carSize,
        carSeats,
        dailyKm
    }

    const carSizes = ['Espaçoso', 'Médio', 'Compacto']

    return (
        <main className='principal'>
            <form className="form" onSubmit={(e) => FormController(e, answers)}>
                <h1>Descubra seu futuro <span>AUDI</span></h1>
                <InputText label="Qual sua renda mensal?" placeholder='R$ 6.000,00' inputId="salary" type="text" onChange={(e) => setSalary(e.target.value)} value={salary} />
                <InputSlide label="Valor disponível para o veículo" inputId="carValue" min="16274" max="1316125" onChange={(e) => setCarValue(e.target.value)} value={carValue} desc='Coloque o valor de sua preferência' formatter={moneyFormatter}/>
                <InputSlide label="Nivel de Esportividade" inputId="carSportiness" min="125" max="630" shower="Civil - Hipercarro" onChange={(e) => setCarSportiness(e.target.value)} value={carSportiness} desc='Selecione o nível de esportividade escolhido'/>
                <InputSlide label="Idade Máxima" inputId="carAge" min="0" max="30" onChange={(e) => setCarAge(e.target.value)} value={carAge} desc='Idade máxima do veículo' formatter={ageFormatter}/>
                <div style={{display: 'flex', gap: '20px'}}>
                    <SelectOption label="Tipo de Veículo" inputId="carSize" value={carSize} onChange={(e) => {
                        setCarSize(e.target.value) 
                        }}  options={carSizes}/>
                    <InputNumber label="Quantidade de assentos" inputId='carSeats' onChange={(e) => setCarSeats(e.target.value)} value={carSeats}/>
                </div>
                <InputText label='Em média, quantos Km você roda no dia?' inputId='dailyKm' type='text' placeholder='50 km' onChange={(e) => {setDailyKm(e.target.value)}} value={dailyKm}/>
                <FormButton icon='/searchIcon.svg' label="Buscar seu novo veículo"/>
            </form>
        </main>
    )
}

function moneyFormatter(value: string) : string {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `R$ ${formattedValue},00`;
}

function ageFormatter(value: string) : string {
    if (value <= "1") {
        return `${value} ano`;
    }
    return `${value} anos`;
}