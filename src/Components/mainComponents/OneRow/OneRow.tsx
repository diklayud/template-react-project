import "./OneRow.css";


interface OneRowProps {
    n1:number;
    n2:number;
    n3:number;
    strongColor:string;
}

function OneRow(props: OneRowProps): JSX.Element {
    return (
        <div className="OneRow">
			<span style={{color: props.strongColor}}>{props.n1}</span>
            <span>{props.n2}</span>
            <span>{props.n3}</span>
        </div>
    );
}

export default OneRow;
