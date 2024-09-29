import { fireEvent, screen, within } from "@testing-library/react";
import ThemeButton from "src/components/ThemeButton/ThemeButton";
import { renderWithProviders } from 'src/test/provider-test-utils';


describe("ThemeButton component testing", () => {

    it("should correctly switch between mode", () => {
        renderWithProviders(<ThemeButton/>);

        const button = screen.getByRole('button');
        const img = within(button).getByRole('img');

        expect(img).toHaveAttribute('src', '/src/assets/sun.svg');

        fireEvent.click(button);

        expect(img).toHaveAttribute('src', '/src/assets/moon.svg');
    });
});
