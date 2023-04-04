import { PaginationContainer, PaginationWrapper, PaginationButton } from './styles'

function Index({ totalPages, page, handlePagination }: any) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <PaginationWrapper>
            {
                pages.map(item => <PaginationButton
                    key={item}
                    onClick={() => handlePagination(item)}
                    active={item === page}
                >
                    {item}
                </PaginationButton>)
            }
        </PaginationWrapper>
    )
}

export default Index