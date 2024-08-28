import Movie from './Movie'
import { render } from '@testing-library/react'

describe("Movie component testing", () => {
    it("should render correctly", () => {
        render(<Movie/>)
    })
})
