import { fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { renderWithProviders } from "src/providers/provider-test-utils";
import { NavBar } from './NavBar';
import * as router from 'react-router';

describe("NavBar component testing", () => {

    const mockedNavigation = jest.fn();

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigation);
    });

    it("should render correctly", () => {
        renderWithProviders(<NavBar/>);
        const linkElement = screen.queryByRole("link", {name: "Home"});
        expect(linkElement).toBeInTheDocument();
    });

    it("should redirect on link click", async () => {
        renderWithProviders(<NavBar/>, {route: "/"});

        await waitFor(() => screen.findByRole("link", {name: "Movies"}));
        const linkElement = screen.getByRole("link", {name: "Movies"});
        fireEvent.click(linkElement);

        expect(mockedNavigation).toHaveBeenCalledWith('/movies', expect.objectContaining({
            replace: false
        }));
    });

    it("should render the current link differently", () => {
        renderWithProviders(<NavBar/>, {route: "/movies"});
        const link = screen.queryByRole("link", {name: "Movies"});

        expect(link).toBeInTheDocument();
        expect(link).toHaveClass("active");
    });
});
