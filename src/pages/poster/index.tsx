import { useEffect, useState } from "react"
import axios from 'axios'
import Container from './qoute'
import { IQuoteStateProps } from './interface'

function Poster() {
    const [qoute, setQoute] = useState<IQuoteStateProps | {}>({})
    useEffect(() => {
        const fetchQuote = async () => {
            const res = await axios.get('https://api.quotable.io/random')
            setQoute(res.data)
        }
        fetchQuote()
        const timer = setInterval(fetchQuote, 10000)

        return () => {
            clearInterval(timer)
        }

    }, [])
    const { content, author } = { ...qoute }
    return (
        <div>
            <Container message={content} author={author} />
        </div>
    )
}

export default Poster
