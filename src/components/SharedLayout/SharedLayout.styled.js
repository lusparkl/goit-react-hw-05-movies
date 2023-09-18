import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
display: flex;
gap: 20px;
padding: 10px;
border-bottom: 1px solid black; 
`

export const StyledLink = styled(NavLink)`
font-size: 30px;
color: black;

&.active {
    color: orange;
}
`