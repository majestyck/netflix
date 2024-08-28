import MediaCard from './MediaCard'
import { render } from '@testing-library/react'

describe("MediaCard component testing", () => {
    it("should render correctly", () => {
        render(<MediaCard/>)
    })
})
