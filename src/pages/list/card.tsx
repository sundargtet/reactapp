import { ICardProps } from './interface'

function Card({ quote }: ICardProps) {
    return (
        <section className='card'>
                {quote.content}
        </section>
    )
}

export default Card