import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { IFetchProps } from './interface'
import './styles.scss'

export default function Details() {
    const { quoteId } = useParams()
    const { isLoading, data, error }: IFetchProps = useFetch(`https://api.quotable.io/quotes/${quoteId}`)
    if (isLoading) {
        return <h1>loading...</h1>
    }
    const { content = '', author = '', dateAdded = '', dateModified = '', tags = [] } = { ...data }
    return (
        <main className='wrapper'>
            <section className='content'>
                {content}
            </section>
            <section className='details'>
                <span className='title'>author</span> : {author} <br />
                <span className='title'>date added</span> : {dateAdded} <br />
                <span className='title'>date modified</span> : {dateModified} <br />
                <span className='title'>tags</span> : {tags.map((item: string) => <button className='tag-button'>{item}</button>)}
            </section>
        </main>
    )
}