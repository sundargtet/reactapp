import { PaginationContainer, PaginationWrapper, PaginationButton } from './styles'
import { IProps } from './interface'

function Index({ totalPages = 1, page, handlePagination }: IProps) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <PaginationWrapper>
            {
                pages.map((item: number) => <PaginationButton
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