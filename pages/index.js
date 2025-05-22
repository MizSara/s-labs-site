
import Head from 'next/head'
import HomePage from './home'

export default function Index() {
  return (
    <>
      <Head>
        <title>S. Labs</title>
        <meta name="description" content="Tests of Taste. Notes of Beauty." />
      </Head>
      <HomePage />
    </>
  );
}
