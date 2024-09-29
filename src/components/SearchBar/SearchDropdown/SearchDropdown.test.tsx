import SearchDropdown from 'src/components/SearchBar/SearchDropdown/SearchDropdown';
import { renderWithProviders } from 'src/test/provider-test-utils';

describe("SearchDropdown component testing", () => {
    it("should render correctly", () => {
        renderWithProviders(<SearchDropdown results={[]} clearSearch={function (): void {
            throw new Error('Function not implemented.');
        } }/>);
    });
});
