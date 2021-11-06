import { useEffect, useState } from "react";
import MarketRow from "../../model/marketRow";
import store from "../../redux/store";
import OneRow from "../OneRow/OneRow";
import "./AllData.css";


interface AllDataProps{
    // marketData:MarketRow[];
    strongColor:string;
}

function AllData(props:AllDataProps): JSX.Element {

    const [marketDataBook, updateMarketDataBook] = useState(new Array<MarketRow>());

    useEffect(() => {
        const m_data = store.getState().marketDataState.marketData;
        console.log(m_data);
        updateMarketDataBook(m_data);
    }, [])
    
    return (
        <div className="AllData">
           
             {/* {dataToshow.map( row => <OneRow {...row}/>)}  */}
             { marketDataBook.map( row => <OneRow n1={row.num1} n2={row.num2} n3={row.num3} strongColor={props.strongColor}/>)} 

        </div>
    );
}

export default AllData;
