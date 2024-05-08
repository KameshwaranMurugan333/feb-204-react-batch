import React, { useCallback, useMemo } from 'react';
import './App.css';

function App() {

  const [mangoCount, updateMangoCount] = React.useState(0);
  const [orangeCount, updateOrangeCount] = React.useState(0);
  const [bananaCount, updateBananaCount] = React.useState(0);

  const [customerCount, updateCustomerCount] = React.useState(0);

  const [lastUpdated, updateLastUpdate] = React.useState("");

  React.useEffect(() => {
    console.log("I will be called all the time, when a re-render happens.")
  });

  React.useEffect(() => {
    console.log("I will be called only once, when the component rendered for the first time.")
  }, []);

  React.useEffect(() => {
    console.log("Mango is updated");
    updateLastUpdate("Mango");
  }, [mangoCount]);

  React.useEffect(() => {
    console.log("Orange is updated");
    updateLastUpdate("Orange");
  }, [orangeCount]);

  React.useEffect(() => {
    console.log("Banana is updated");
    updateLastUpdate("Banana");
  }, [bananaCount]);

  const getTotalStock = useCallback(() => {
    return mangoCount + orangeCount + bananaCount
  }, [mangoCount, bananaCount, orangeCount]);

  const totalStock = useMemo(() => {
    console.log("I am calculating...")
    return mangoCount + bananaCount + orangeCount
  }, [mangoCount, bananaCount, orangeCount]);

  return (<>
    <p>No of Mangos: {mangoCount}</p>
    <button onClick={() => updateMangoCount(mangoCount + 1)} >+</button>
    <button onClick={() => updateMangoCount(mangoCount - 1)}>-</button>

    <p>No of Oranges: {orangeCount}</p>
    <button onClick={() => updateOrangeCount(orangeCount + 1)} >+</button>
    <button onClick={() => updateOrangeCount(orangeCount - 1)}>-</button>

    <p>No of Bananas: {bananaCount}</p>
    <button onClick={() => updateBananaCount(bananaCount + 1)} >+</button>
    <button onClick={() => updateBananaCount(bananaCount - 1)}>-</button>

    <p>No of Customers: {customerCount}</p>
    <button onClick={() => updateCustomerCount(customerCount + 1)} >+</button>
    <button onClick={() => updateCustomerCount(customerCount - 1)}>-</button>

    <p>Last updated: {lastUpdated}</p>
    <p>Total Stock: {getTotalStock()}</p>
    <p>Total Stock: {totalStock}</p>
  </>);
}

export default App;
