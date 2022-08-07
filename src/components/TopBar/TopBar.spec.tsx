import {  render } from '@testing-library/react'
import TopBar from './TopBar'


describe('TopBar component', () => {
    test('render correctly', () => {
        const { getByText } = render(<TopBar title='Teste' caption='Testando o layout'/>)
        expect(getByText('Teste')).toBeInTheDocument()
        expect(getByText('Testando o layout')).toBeInTheDocument()
    })
})
