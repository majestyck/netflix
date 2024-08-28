import { fireEvent, screen, within } from "@testing-library/react";
import { renderWithProviders } from "src/providers/provider-test-utils";
import ThemeButton from './ThemeButton';

describe("ThemeButton component testing", () => {

    it("should correctly switch between mode", () => {
        renderWithProviders(<ThemeButton/>);

        const button = screen.getByRole('button');
        const img = within(button).getByRole('img');

        expect(img).toHaveAttribute('src', expect.stringContaining('moon'));

        fireEvent.click(button);

        expect(img).toHaveAttribute('src', expect.stringContaining('sun'));
    });
});
