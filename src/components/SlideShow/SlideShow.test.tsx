import SlideShow from './SlideShow'
import { render } from '@testing-library/react'

describe("SlideShow component testing", () => {
    it("should render correctly", () => {
        render(<SlideShow title={''} data={[]} queryNextPage={function (): void {
            throw new Error('Function not implemented.');
        } } />)})
});
