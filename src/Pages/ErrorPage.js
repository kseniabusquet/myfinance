import notFound from '../assets/images/404.jpeg'
import './ErrorPage.css'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className = 'error-container'>
        <img className='not-found-image'src = {notFound} alt = 'page not found'/>
        <Link to = '/' style = {{textAlign: 'center'}}>Back to the main page</Link>
        </div>
    )
}

export default ErrorPage