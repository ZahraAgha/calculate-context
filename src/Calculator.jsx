import React, { useContext, useState } from 'react';
import style from './Calculator.module.css'
import CounterContext from './CounterContext';

const Calculator = () => {
//     const [count1, setCount] = useState();
//     const [count2, setCount2] = useState();
//     const [result, setResult] = useState();

//     const topla = () => {
//         const c = count1 + count2;
//         return setResult(c);
//     };
//     const cixma = () => {
//         const c = count1 - count2
//         return setResult(c);
//     }
//     const vurma = () => {
//         const c = count1 * count2;
//         return setResult(c);
//     };
//     const bolme = () => {
//         const c = count1 / count2
//         return setResult(c);
//     }
const {count1,count2,setCount,setCount2,topla,cixma,vurma,bolme,result} = useContext(CounterContext)
    return (
        <div className={style.calc}>
        <h1 style={{color:"white", textAlign:"center",marginBottom:"70px",fontSize:"40px"}}>CALCULATOR</h1>
            <input type="number" value={count1} onChange={(e) => setCount(parseInt(e.target.value))} />
            <input type="number" value={count2} onChange={(e) => setCount2(parseInt(e.target.value))} />
            <button onClick={topla}>+</button>
            <button onClick={cixma}>-</button>
            <button onClick={vurma}>*</button>
            <button onClick={bolme}>/</button>
            <div className={style.result}>{result}</div>
        </div>
    );
};

export default Calculator;