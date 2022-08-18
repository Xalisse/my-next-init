import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div className="flex flex-col h-full text-center">
            <Head>
                <title>My Next Init</title>
                <meta name="description" content="My Next Init" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen flex justify-center items-center p-3">
                <h1 className="text-3xl sm:text-5xl font-bold" data-cy="title">
                    HMy Next Init
                </h1>
            </main>

            <footer className="h-20 flex justify-center items-center p-3 shadow-inner">
                Made with ❤ by Valentine
            </footer>
        </div>
    )
}

export default Home
