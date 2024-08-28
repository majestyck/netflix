import ActorCarousel from 'src/components/ActorCarousel/ActorCarousel.tsx';
import { render } from '@testing-library/react';

describe("ActorCarousel component testing", () => {
    it("should render correctly", () => {
        render(<ActorCarousel/>);
    });
});
