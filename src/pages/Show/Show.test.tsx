import Show from './Show';
import { render } from '@testing-library/react';

describe("Show component testing", () => {
    it("should render correctly", () => {
        render(<Show/>);
    });
});
