import { render, screen } from '@testing-library/react';
import ActorCarousel from 'src/components/ActorCarousel/ActorCarousel';

describe("ActorCarousel component testing", () => {
    it("should render correctly", () => {
        render(<ActorCarousel actors={[{
            id: 1,
            name: 'name 1',
            profile_path: '/toto1',
            character: 'character 1'
        },
        {
            id: 2,
            name: 'name 2',
            profile_path: '/toto2',
            character: 'character 2'
        }]}/>);
        
        expect(screen.getByText("name 1")).toBeInTheDocument();
        expect(screen.getByText("name 2")).toBeInTheDocument();
        expect(screen.getByText("character 1")).toBeInTheDocument();
        expect(screen.getByText("character 2")).toBeInTheDocument();
        expect(screen.getByText("character 2")).toBeInTheDocument();
        const imgs = screen.queryAllByRole("img");
        expect(imgs).toHaveLength(2);
        expect(imgs[0]).toHaveAttribute(
            "src",
            "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/toto1"
        );
        expect(imgs[1]).toHaveAttribute(
            "src",
            "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/toto2"
        );
    });

    it('should render nothing with empty actors', () => {
        render(<ActorCarousel actors={[]}/>);
        expect(screen.queryByText("name 1")).toBeNull();
    })
});
