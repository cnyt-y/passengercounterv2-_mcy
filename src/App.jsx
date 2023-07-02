import { useState ,useEffect, usePrevious } from 'react';
import './index.css';

function App() {
    const [count,countUpd] = useState(0);
    const [deger,setDeger] = useState(0);
    //let previousValue = 0;

    const increment = () => {
        countUpd( previousValue => previousValue + 1);
    };

    let items = JSON.parse(localStorage.getItem('items'));

    function save() {
        console.log("toplam",items,)
        items += count
        setDeger((previousValue) => previousValue + ' - '+ count);
 
        localStorage.setItem('items', JSON.stringify(count + ' - '));
        countUpd(0);
    }

    


    return (
        <>
            <h1>People entered:</h1>
            <h2 id="count-el">{count}</h2>
            <button id="increment-btn" onClick={increment}>INCREMENT</button>
            <button id="save-btn" onClick={save}>SAVE</button>
            <p id="save-el">Previous entries: {deger} </p>
            <h2>Total Passengers: {items} </h2>
        </>
    )
}

export default App