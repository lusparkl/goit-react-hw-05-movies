import { StyledHeader, StyledLink } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <>
            <StyledHeader>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </StyledHeader>
            <Outlet></Outlet>
        </>
    )
}
