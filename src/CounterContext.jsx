import { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count1, setCount] = useState();
  const [count2, setCount2] = useState();
  const [result, setResult] = useState();

  const topla = () => {
    const c = count1 + count2;
    return setResult(c);
  };
  const cixma = () => {
    const c = count1 - count2;
    return setResult(c);
  };
  const vurma = () => {
    const c = count1 * count2;
    return setResult(c);
  };
  const bolme = () => {
    const c = count1 / count2;
    return setResult(c);
  };

  const data = {
    count1,
    count2,
    result,
    setCount,
    setCount2,
    topla,
    cixma,
    vurma,
    bolme,
  };
  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};
export default CounterContext
