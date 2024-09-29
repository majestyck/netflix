import { render } from '@testing-library/react'
import Movie from 'src/pages/Movie/Movie'

describe("Movie component testing", () => {
    it("should render correctly", () => {
        render(<Movie/>)
    })
})
