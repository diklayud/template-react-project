import "./CentralData.css";


interface CentralDataProps{
    centralNumber:number;
}

function CentralData(props:CentralDataProps): JSX.Element {
    return (
        <div className="CentralData">
			<b>{props.centralNumber} USD</b>
        </div>
    );
}

export default CentralData;
