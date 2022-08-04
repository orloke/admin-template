import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import useAppData from '../data/hooks/useAppData'
import styles from '../styles/Home.module.css'

const Notification = () => {

  const {changeThema} = useAppData()

  return (
    <Layout title='Notificações' caption='Testando o layout' >

    </Layout>
  )
}

export default Notification
