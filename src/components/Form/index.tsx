import './Form.css'
import { useState } from 'react'
import InputText from '../InputText'
import InputSlide from '../InputSlide'

export default function Form () {

    const [salary, setSalary] = useState("")
    const [carValue, setCarValue] = useState("")
    const [carSportiness, setCarSportiness] = useState("")
    const [carAge, setCarAge] = useState("")

    return (
        <main className='principal'>
            <form className="form">
                <h1>Descubra seu futuro <span>AUDI</span></h1>
                <InputText label="Qual sua renda mensal?" placeholder='R$ 6.000,00' inputId="salary" type="text" onChange={(e) => setSalary(e.target.value)} value={salary}/>
                <InputSlide label="Valor disponível para o veículo" inputId="carValue" min="10000" max="2000000" onChange={(e) => setCarValue(e.target.value)} value={carValue} desc={carValue}/>
                <InputSlide label="Nivel de Esportividade" inputId="carSportiness" min="1" max="80" onChange={(e) => setCarSportiness(e.target.value)} value={carSportiness} desc={carSportiness}/>
                <InputSlide label="Idade Mínima" inputId="carAge" min="0" max="30" onChange={(e) => setCarAge(e.target.value)} value={carAge} desc={carAge}/>
                
            </form>
        </main>
    )
}