import { render, screen } from '@testing-library/react'
import Content from './Content'


describe('Content component', () => {
    test('render correctly', () => {
        const {getByText} = render(
            <Content>
                Testando
            </Content>
        )
        expect(getByText('Testando')).toBeInTheDocument()
    })
})
