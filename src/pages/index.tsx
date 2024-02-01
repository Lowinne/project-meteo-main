
import PageAccueil from "@/Components/PageAccueil"
import Head from "next/head"
import React from "react"


export default function Home() {

  return (
    <>
      <Head>
        <title>Meteo France</title>
        <meta name="description" content="ostad w9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/meteo_france_logo.png" />
        
      </Head>
      <main>
        <PageAccueil/>
        
      </main>
    </>
  )
}
