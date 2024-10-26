import { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);

    
    const sumar = () => setResult(parseFloat(num1) + parseFloat(num2));
    const restar = () => setResult(parseFloat(num1) - parseFloat(num2));
    const multiplicar = () => setResult(parseFloat(num1) * parseFloat(num2));
    const dividir = () => {
        if (num2 === "0") {
            alert("0 no es divisible");
            return;
        }
        setResult(parseFloat(num1) / parseFloat(num2));
    };

    return (
        <div className="calculator">
            <input
                type="number"
                value={num1}
                placeholder="0"
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                placeholder="0"
                onChange={(e) => setNum2(e.target.value)}
            />
            <div className="calculatorButtons">
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={multiplicar}>x</button>
                <button onClick={dividir}>÷</button>
            </div>
            {result !== null ? result : "null"}
        </div>
    );
}

export default Calculator;