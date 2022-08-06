import {  render, screen } from '@testing-library/react'
import TopBar from './TopBar'


describe('TopBar component', () => {
    test('render correctly', () => {
        const {container, getByText, getByRole} = render(<TopBar title='Teste' caption='Testando o layout'/>)
        expect(getByText('Teste')).toBeInTheDocument()
        expect(getByText('Testando o layout')).toBeInTheDocument()
    })
})
