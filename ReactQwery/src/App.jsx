import './App.scss'
import {useQuery} from "react-query";
import {coinApi} from "./api/coinApi.jsx";
import {ItemCoin} from "./components/itemCoin/ItemCoin.jsx";

function App() {
    const {isLoading, error, data = []} = useQuery('coins', () => coinApi.getAllCoins(), {
        select: ({data}) => data.coins
    })
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    if (error) {
        return <h1>произошла ошибка</h1>
    }
    return (
        <div>
            {data.map(el =>
                <ItemCoin key={Math.random()} data={el}/>
            )}
        </div>
    )
}

export default App
