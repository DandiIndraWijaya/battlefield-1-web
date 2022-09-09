import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HomeComponent from '../components/pages'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Battlefield 1</title>
      </Head>
      <HomeComponent />
    </>
  )
}

export default Home
