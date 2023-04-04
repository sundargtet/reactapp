import { useNavigate, } from 'react-router-dom'
import { ICardProps } from './interface'


function Card({ quote }: ICardProps) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/details/${quote._id}`)
    }
    return (
        <section className='card' onClick={handleNavigate}>
            {quote.content}
        </section>
    )
}

export default Card