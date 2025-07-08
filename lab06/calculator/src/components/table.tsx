import React from "react";
import { useState } from "react";

const Table: React.FC = () => {
    const [input, setInput] = useState<string>("0");
    const [prevValue, setPrevValue] = useState<string>("");
    const [operator, setOperator] = useState<string>("");

    const handleNumber = (num: string) => {
        setInput((prev) => (prev === "0" ? num : prev + num));
    };

    const handleOperator = (op: string) => {
        if (input !== "") {
            setPrevValue(input);
            setInput("0");
            setOperator(op);
        }
    };

    const handleClear = () => {
        setInput("0");
        setPrevValue("");
        setOperator("");
    };

    const handleToggleSign = () => {
        if (input !== "0") {
            setInput((prev) =>
                prev.startsWith("-") ? prev.slice(1) : "-" + prev
            );
        }
    };

    const handleCalculate = () => {
        if (prevValue && input && operator) {
            const num1 = parseFloat(prevValue);
            const num2 = parseFloat(input);
            let result: number | string = "";

            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num2 !== 0 ? num1 / num2 : "Error";
                    break;
                case "%":
                    result = num1 % num2;
                    break;
                default:
                    return;
            }
            setInput(result.toString());
            setPrevValue("");
            setOperator("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <div className="text-right text-2xl mb-4 p-2 bg-gray-200 rounded">
                    {input}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {["AC", "+/-", "%", "/"].map((btn) => (
                        <button
                            key={btn}
                            className={
                                btn === "/"
                                    ? "p-4 bg-orange-400 text-white rounded hover:bg-orange-500"
                                    : "p-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                            }
                            onClick={() =>
                                btn.match(/[0-9]/)
                                    ? handleNumber(btn)
                                    : btn === "AC"
                                    ? handleClear()
                                    : btn === "+/-"
                                    ? handleToggleSign()
                                    : handleOperator(btn)
                            }
                        >
                            {btn}
                        </button>
                    ))}
                    {["7", "8", "9", "*"].map((btn) => (
                        <button
                            key={btn}
                            className={
                                btn === "*"
                                    ? "p-4 bg-orange-400 text-white rounded hover:bg-orange-500"
                                    : "p-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                            }
                            onClick={() =>
                                btn.match(/[0-9]/)
                                    ? handleNumber(btn)
                                    : handleOperator(btn)
                            }
                        >
                            {btn}
                        </button>
                    ))}
                    {["4", "5", "6", "+"].map((btn) => (
                        <button
                            key={btn}
                            className={
                                btn === "+"
                                    ? "p-4 bg-orange-400 text-white rounded hover:bg-orange-500"
                                    : "p-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                            }
                            onClick={() =>
                                btn.match(/[0-9]/)
                                    ? handleNumber(btn)
                                    : handleOperator(btn)
                            }
                        >
                            {btn}
                        </button>
                    ))}
                    {["1", "2", "3", "-"].map((btn) => (
                        <button
                            key={btn}
                            className={
                                btn === "-"
                                    ? "p-4 bg-orange-400 text-white rounded hover:bg-orange-500"
                                    : "p-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                            }
                            onClick={() =>
                                btn.match(/[0-9]/)
                                    ? handleNumber(btn)
                                    : handleOperator(btn)
                            }
                        >
                            {btn}
                        </button>
                    ))}
                    <button
                        className="p-4 bg-gray-400 text-white rounded hover:bg-gray-500 col-span-2"
                        onClick={handleNumber.bind(null, "0")}
                    >
                        0
                    </button>

                    <button
                        className="p-4 bg-gray-400 text-white rounded hover:bg-gray-500"
                        onClick={() => handleNumber(".")}
                    >
                        .
                    </button>

                    <button
                        className="p-4 bg-orange-400 text-white rounded hover:bg-orange-500"
                        onClick={() => handleCalculate()}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Table;
