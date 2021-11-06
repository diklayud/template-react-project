import AllData from "../../mainComponents/AllData/AllData";
import CentralData from "../../mainComponents/CentralData/CentralData";
import "./mainScreen.css";
import * as data from "../../assets/data.json";
import store from "../../redux/store";
import { addData } from "../../redux/dataState";
import { useEffect } from "react";

function MainScreen(): JSX.Element {
    
    // const dataToShow1 = generateData(10);
    // const dataToShow2 = generateData(10);
    
    // console.log(dataToShow1);
    // console.log(dataToShow2);
    function loadDataFromJsonToStore(){
        const myData = data.data;
        store.dispatch(addData(myData));
    }
    
    useEffect(() => {
        loadDataFromJsonToStore();
    }, [])

    // function generateData(rows: number) {
    //     let listOfRows = [];
    //     for (let i = 0; i < rows; i++) {
    //         const tmpRow = { num1: Number(Math.random().toFixed(5)), 
    //                          num2: Number(Math.random().toFixed(5)), 
    //                          num3: Number(Math.random().toFixed(5)) };
    //         listOfRows.push(tmpRow);
    //     }
    //     return listOfRows;
    // }


    return (
        <div className="mainScreen">
            <AllData strongColor={"green"}/>
            <CentralData centralNumber={1233333}/>
            {/* <AllData marketData={dataToShow2} strongColor={"red"}/> */}
            <AllData strongColor={"red"}/>
        </div>
    );
}

export default MainScreen;
