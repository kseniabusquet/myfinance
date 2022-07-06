function Remaining (props) {
    
    let sumValue = 0
    
        for (let i = 0; i < props.info.length; i++){
            
            sumValue += parseInt(props.info[i].value)
            
        }
    
       
    return (
        <div>
            <span>Remaining: <span style = {{color: 'green'}}>{sumValue}$</span></span>
        </div>
    )
}

export default Remaining