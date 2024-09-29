import { render, screen } from '@testing-library/react';
import ActorCard from 'src/components/ActorCard/ActorCard';

describe("ActorCard component testing", () => {
    it("should render correctly", () => {
        render(<ActorCard name={'name'} imgSource={'/toto'} character={'character'}/>);

        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/toto')
        expect(screen.getByText('name')).toBeInTheDocument()
        expect(screen.getByText('character')).toBeInTheDocument()
    });

    it('has img source then render missing img source', () => {
        render(<ActorCard name={'name'} character={'character'}/>);
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg')
    })
});
