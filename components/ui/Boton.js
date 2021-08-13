import styled from '@emotion/styled'


const Boton = styled.a`
    font-weight:700;
    text-transform:uppercase;
    border:1px solid #d1d1d1;
    padding:.8rem 2rem;
    margin-right:1rem;
    background-color:${props =>props.bgColor ? '#DA552F' : '#ffff'};
    color:${props => props.bgColor ? '#ffff' : "#000"};
    &::last-of-type{
        margin-right:0;
    }
    &:hover{
        cursor: pointer;
        opacity:.7;
    }
`;


export default Boton;