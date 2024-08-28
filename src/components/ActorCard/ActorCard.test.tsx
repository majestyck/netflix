import ActorCard from './ActorCard';
import { render } from '@testing-library/react';

describe("ActorCard component testing", () => {
    it("should render correctly", () => {
        render(<ActorCard/>);
    });
});
