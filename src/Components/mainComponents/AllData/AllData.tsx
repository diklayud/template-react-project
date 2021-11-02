import { isPropertySignature } from "typescript";
import MarketRow from "../../model/marketRow";
import OneRow from "../OneRow/OneRow";
import "./AllData.css";


interface AllDataProps{
    marketData:MarketRow[];
    strongColor:string;
}

function AllData(props:AllDataProps): JSX.Element {

    return (
        <div className="AllData">
           
             {/* {dataToshow.map( row => <OneRow {...row}/>)}  */}
             {props.marketData.map( row => <OneRow n1={row.num1} n2={row.num2} n3={row.num3} strongColor={props.strongColor}/>)} 

        </div>
    );
}

export default AllData;
