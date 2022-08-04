import {  render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'


describe('Sidebar component', () => {
    test('render correctly', () => {
        const {container, getByText, getByRole} = render(<Sidebar/>)
        container.querySelector('#sandbox > div > aside > ul:nth-child(2) > li:nth-child(1) > a > svg')
        expect(getByText('Home')).toBeInTheDocument()
        expect(getByText('Ajustes')).toBeInTheDocument()
        expect(getByText('Notificações')).toBeInTheDocument()
        expect(getByRole('link', { name: /home/i } )).toHaveAttribute('href', '/')
        expect(getByRole('link', { name: /notificações/i } )).toHaveAttribute('href', '/notification')
    })
})
