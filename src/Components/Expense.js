function Expense (props){
    
    let sumValue = 0
    
        for (let i = 0; i < props.info.length; i++){
            if (props.info[i].value < 0){
                sumValue += parseInt(props.info[i].value)
            }
        }
    return (
        <div>
            <span>Expense: <span style = {{color: 'red'}}>{Math.abs(sumValue)}$</span></span>
        </div>
    )
}

export default Expense