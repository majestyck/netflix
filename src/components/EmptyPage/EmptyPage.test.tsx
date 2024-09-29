import { render, screen } from "@testing-library/react"
import EmptyPage from "src/components/EmptyPage/EmptyPage"

describe('EmptyPage component testing', () => {
    
    it('render correctly', () => {
        render(<EmptyPage />)
        expect(screen.getByRole('img')).toHaveAttribute('src', 'src/assets/empty.gif')
    })

})