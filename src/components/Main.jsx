import React, { useState, useEffect } from 'react';
import countries from '../assets/countries';
import empty from '../assets/img/empty.png';
import reload from '../assets/img/reload32.png';
import Img from './UI/Img';
import P from './UI/P';
import Button from './UI/Button';
import Select from './UI/Select';
import GetData from '../api/getData';

const Main = () => {
    const [currency, setCurrency] = useState([])
    const [picked, setPicked] = useState('')
    const [rate, setRate] = useState('')
    const [exchange, setExchange] = useState({})   
    const [country, setCountry] = useState(empty)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        const rates = await GetData.getRates()
        setExchange(rates)
        const options = await GetData.getOptions()
        setCurrency(options)
    }    

    function selectCurrency(value){
        setPicked(value);
        (value in exchange) ? setRate(exchange[value]) : setRate('');     
        let code = Object.keys(countries).find(key => countries[key] === value);
        let source = code === undefined  ? empty : `https://flagcdn.com/16x12/${code.toLocaleLowerCase()}.png`;
        setCountry(source)
    }

    return (
        <div className="main">
            <Img src={country} width="16" height="12" alt="flag" />
            <Select options={currency} value={picked} onChange={selectCurrency} cssc="select"/>            
            <P className="rate">{rate}</P>
            <Button className="btn_load" onClick={fetchData}>
                <Img src={reload} alt="reload" />
            </Button>
        </div>
    );
}

export default Main;
