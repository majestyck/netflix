import { fireEvent, screen } from '@testing-library/react'
import MediaCard from 'src/components/MediaCard/MediaCard'
import { renderWithProviders } from 'src/test/provider-test-utils';
import * as router from 'react-router'

const navigate = vi.fn()

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})
describe("MediaCard component testing", () => {
 

    it("should render correctly", () => {
        renderWithProviders(<MediaCard id={0} title={'title'} description={'description'} year={2020} note={1}/>)
        fireEvent.mouseEnter(screen.getByRole('img'))

        expect(screen.getByText('title')).toBeInTheDocument()
        expect(screen.getByText('description')).toBeInTheDocument()
        expect(screen.getByText('2020')).toBeInTheDocument()
        expect(screen.getByText('1.00')).toBeInTheDocument()
        expect(screen.getByText('⭐️')).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'See more →'})).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', '/src/assets/default-movie.png')
    })

    it("should render img url", () => {
        renderWithProviders(<MediaCard id={0} title={'title'} description={'description'} year={2020} imgUrl='/toto' note={1}/>)
        fireEvent.mouseEnter(screen.getByRole('img'))

        expect(screen.getByText('title')).toBeInTheDocument()
        expect(screen.getByText('description')).toBeInTheDocument()
        expect(screen.getByText('2020')).toBeInTheDocument()
        expect(screen.getByText('1.00')).toBeInTheDocument()
        expect(screen.getByText('⭐️')).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'See more →'})).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/toto" )

        fireEvent.mouseLeave(screen.getByRole('img'))

        expect(screen.queryByText('title')).toBeNull()
        expect(screen.queryByText('description')).toBeNull()
        expect(screen.queryByText('2020')).toBeNull()
        expect(screen.queryByText('1.00')).toBeNull()
        expect(screen.queryByText('⭐️')).toBeNull()
        expect(screen.queryByRole('button', {name: 'See more →'})).toBeNull()
    })

    it("open details on click see more on show", () => {
        renderWithProviders(<MediaCard id={0} title={'title'} description={'description'} year={2020} note={1}/>)
        fireEvent.mouseEnter(screen.getByRole('img'))
        fireEvent.click(screen.getByRole('button', {name: 'See more →'}))
        expect(navigate).toHaveBeenCalledWith('/shows/0')
    })

    it("open details on click see more on show", () => {
        renderWithProviders(<MediaCard id={0} title={'title'} description={'description'} year={2020} note={1} isMovie/>)
        fireEvent.mouseEnter(screen.getByRole('img'))
        fireEvent.click(screen.getByRole('button', {name: 'See more →'}))
        expect(navigate).toHaveBeenCalledWith('/movies/0')
    })
})
