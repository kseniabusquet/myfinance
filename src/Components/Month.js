import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import './Month.css'

function Month (props) {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const handleLeft = () => {
        if (props.currentMonth > 0) {
            let newMonth = props.currentMonth-1
            props.filterMonth(newMonth)
        }
    }

    const handleRight = () => {
        if (props.currentMonth < 11 ) {
            let newMonth = props.currentMonth+1
            props.filterMonth(newMonth)
        }
    }

    return (
        <div className = 'month-area'>
            <FaAngleLeft onClick = {handleLeft} size={25} style={{ fill: '#F5793B', cursor: "pointer" }}/>
            <span>{months[props.currentMonth]}</span>
            <FaAngleRight onClick = {handleRight} size={25} style={{ fill: '#F5793B', cursor: "pointer" }}/>
        </div>
    )
}

export default Month