
function Income (props){
    
    let sumValue = 0
    
        for (let i = 0; i < props.info.length; i++){
            if (props.info[i].value > 0){
                sumValue += parseInt(props.info[i].value)
            }
        }
   
    return (
        <div>
            <span>Income: <span style = {{color: 'green'}}>{ sumValue }$</span></span>
        </div>
    )
}

export default Income