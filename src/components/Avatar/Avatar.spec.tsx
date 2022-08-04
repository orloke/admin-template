import { render, screen } from '@testing-library/react'
import Avatar from './Avatar'

describe('Avatar component', () => {
    test('render correctly', () => {
        const {getByAltText} = render(<Avatar/>)
        expect(getByAltText('imagem do usuario')).toBeInTheDocument()
        expect(screen.getByAltText('imagem do usuario')).toBeInTheDocument()
    })
})
