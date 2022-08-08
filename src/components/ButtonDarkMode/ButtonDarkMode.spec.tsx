import { render } from '@testing-library/react'
import ButtonDarkMode from './ButtonDarkMode'


describe('ButtonDarkMode component', () => {
    test('render correctly', () => {
        const {getByText} = render(<ButtonDarkMode/>)
        const button = getByText('Escuro')
    })
})
