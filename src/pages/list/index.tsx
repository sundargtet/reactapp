import { useState, useRef, useEffect, useCallback } from "react";
import Card from './card'
import './style.scss'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { IQouteProps } from './interface'

function App() {
    const [page, setPage] = useState(1);
    const { loading, error, list } = useInfiniteScroll(page);
    const loader = useRef(null);

    const handleObserver = useCallback((entries:any[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader!.current) observer.observe(loader!.current);
    }, [handleObserver]);
    return (
        <>
            <main className="cards-list">
                {list.map((item: IQouteProps) => <Card key={item._id} quote={item} />)}
            </main>
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            <div ref={loader} />
        </>
    );
}

export default App;
