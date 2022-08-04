import useAuth from '../../data/hooks/useAuth';
import { IconHouse, IconLogout, IconNotification, IconSettings } from '../icons';
import Logo from '../Logo/Logo';
import MenuItem from '../MenuItem';

const Sidebar = () => {

  const {logout} = useAuth()

  return (

        <aside className='flex flex-col h-screen dark:bg-gray-900' >
          <div className={`h-20 w-20 bg-gradient-to-r from-indigo-500 via-blue-700 to-purple-800 flex flex-col items-center justify-center`} >
            <Logo/>
          </div>
          <ul className='flex-grow' >
              <MenuItem url='/' text='Home' icon= {IconHouse} />
              <MenuItem url='/settings' text='Ajustes' icon= {IconSettings} />
              <MenuItem url='/notification' text='Notificações' icon= {IconNotification} />
          </ul>
          <ul>
              <MenuItem 
                onClick={logout} 
                text='Sair' icon= {IconLogout} 
                className = 'text-red-500 dark:text-red-400 hover:bg-red-500 dark:hover:text-white hover:text-white ' />
          </ul>
        </aside>

  )
}

export default Sidebar;