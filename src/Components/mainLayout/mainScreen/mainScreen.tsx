import AllData from "../../mainComponents/AllData/AllData";
import CentralData from "../../mainComponents/CentralData/CentralData";
import "./mainScreen.css";

function MainScreen(): JSX.Element {
   
    const dataToshow1 = generateData(10);
    const dataToshow2 = generateData(10);

    function generateData(rows: number) {
        let listOfRows = [];
        for (let i = 0; i < rows; i++) {
            const tmpRow = { num1: Number(Math.random().toFixed(5)), 
                             num2: Number(Math.random().toFixed(5)), 
                             num3: Number(Math.random().toFixed(5)) };
            listOfRows.push(tmpRow);
        }
        return listOfRows;
    }

    return (
        <div className="mainScreen">
            <AllData marketData={dataToshow1} strongColor={"green"}/>
            <CentralData centralNumber={1233333}/>
            <AllData marketData={dataToshow2} strongColor={"red"}/>
        </div>
    );
}

export default MainScreen;
