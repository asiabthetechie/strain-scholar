import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Strain Scholars | Home</title>
        <meta name="description" content="Free cannabis education"/>
        <meta name="keywords" content="cannabis, strain, education"/>
        <meta name="author" content="Asia B (Asia B the Techie)"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div>
        <h1 className={styles.headline}>Learn it. Love it. Blaze it.</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link href="/strains">
          <a className={styles.darkshadowbtn}>Explore All Strains</a>
        </Link>
      </div>
    </>
  )
}
