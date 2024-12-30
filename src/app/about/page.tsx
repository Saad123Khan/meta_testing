import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    <>
      <Head>
        <title>About Us - Your Website Name</title>
        <meta name="description" content="Learn more about us on this page." />
        <meta property="og:title" content="About Us - Your Website Name" />
        <meta property="og:description" content="Learn more about us on this page." />
        <meta property="og:url" content="https://meta-testing-delta.vercel.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://meta-testing-delta.vercel.app/logo.webp" />
      </Head>
    <div>
      About
    </div>
    </>
  )
}

export default page
