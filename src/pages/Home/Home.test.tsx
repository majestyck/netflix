import Home from './Home';
import { render } from '@testing-library/react';

describe("Home component testing", () => {
    it("should render correctly", () => {
        render(<Home/>);
    });
});
