import { IQouteProps } from './interface'
import { Wrapper, Message, Author } from './styles'

function Container({ message, author }: IQouteProps) {
    return (
        <Wrapper>
            <Message>
                {message}
            </Message>
            <Author>
                - {author}
            </Author>
            
        </Wrapper>
    )
}

export default Container