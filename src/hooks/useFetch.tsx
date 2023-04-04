import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (api: string) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [data, setData] = useState<any>({})
    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(api)
            setData(res.data)
            setLoading(false)
            setError('')
        } catch (e: any) {
            setError('something went wrong')
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return { isLoading, error, data }
}