import GenreBadge from './GenreBadge';
import { render } from '@testing-library/react';

describe("GenreBadge component testing", () => {
    it("should render correctly", () => {
        render(<GenreBadge/>);
    });
});
