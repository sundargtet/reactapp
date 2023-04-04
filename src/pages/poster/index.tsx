import { useEffect, useState } from "react"
import axios from 'axios'
import Container from './qoute'

function Poster() {
    const [qoute, setQoute]: any = useState({})
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
    return (
        <div>
            <Container message={qoute.content} author={qoute.author} />
        </div>
    )
}

export default Poster
