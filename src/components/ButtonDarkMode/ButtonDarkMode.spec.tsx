import { render } from '@testing-library/react'
import ButtonDarkMode from './ButtonDarkMode'
import userEvent  from '@testing-library/user-event'

describe('ButtonDarkMode component', () => {
    test('render correctly', () => {
        const {getByText} = render(<ButtonDarkMode/>)
        const button = getByText('Escuro')
        userEvent.click(button)
        expect(getByText('Escuro')).toBeInTheDocument()
    })
})
