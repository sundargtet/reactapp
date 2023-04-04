import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "./card"
import { IQuoteListProps, IQouteProps } from './interface'
import Pagiation from '../pagination'
import './style.scss'

function Index() {
  const [quotesList, setQuoteList] = useState<IQuoteListProps | {}>({})
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await axios.get('https://api.quotable.io/quotes')
      setQuoteList(res.data)
    }
    fetchQuotes()
  }, [])
  const { results, totalPages, page } = { ...quotesList }
  const handlePagination = async (id: number) => {
    const res = await axios.get(`https://api.quotable.io/quotes?page=${id}`)
    setQuoteList(res.data)
  }
  return (
    <>
      <main className='cards-list'>
        {
          results?.length &&
          results?.map((quote: IQouteProps) => <Card key={quote._id} quote={quote} />)
        }
      </main>
      <Pagiation totalPages={totalPages} page={page} handlePagination={handlePagination} />
    </>
  )
}

export default Index