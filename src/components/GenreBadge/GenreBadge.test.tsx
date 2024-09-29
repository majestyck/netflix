import { render, screen } from '@testing-library/react';
import GenreBadge from 'src/components/GenreBadge/GenreBadge';

describe("GenreBadge component testing", () => {
    it("should render correctly", () => {
        render(<GenreBadge genre={'genre'}/>);
        expect(screen.getByText('genre')).toBeInTheDocument()
    });
});
