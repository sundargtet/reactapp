import styled from 'styled-components'
import { IStyleProps } from './interface'

export const PaginationWrapper = styled.div`
    overflow-x: scroll;
    border:1px solid #cecece ;
    display:flex ;
`
export const PaginationContainer = styled.div`
    display: flex;
    flex-wrap:nowrap ;
`
export const PaginationButton = styled.button<IStyleProps>`
    padding: 10px;
    background-color:${({ active }) => active ? '#cecece' : '#ffffff'} ;
    border:none ;
    outline:none ;
    cursor: pointer;

    &:hover{
        background-color:#e6e6e6 ;
    }


`