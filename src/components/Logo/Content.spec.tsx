import { render } from '@testing-library/react'
import Logo from './Logo'


describe('Logo component', () => {
    test('render correctly', () => {
        const {getByTestId} = render(<Logo/>)
        expect(getByTestId("logo-classes")).toHaveClass('h-3 w-3 rounded-full bg-green-600 ml-0.5')

    })
})
