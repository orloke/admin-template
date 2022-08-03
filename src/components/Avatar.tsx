import Link from "next/link"
import useAuth from "../data/hooks/useAuth"

interface Props{
    className?: string
}

const Avatar = (props: Props) => {

    const {user} = useAuth()

  return (
    <Link href={'/'} >
        <img 
            src={user?.avatar ?? '/avatar.svg'} 
            alt="imagem do usuario"
            className={props.className}
        />
    </Link>
  )
}

export default Avatar