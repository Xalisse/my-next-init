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
                    My Next Init
                </h1>
                <ul>
                    <li>NextJS</li>
                    <li>Prettier</li>
                    <li>ESLint</li>
                    <li>Husky</li>
                    <li>Jest</li>
                    <li>Cypress</li>
                    <li>Cucumber</li>
                    <li>Tailwind</li>
                    <li>validate-branch-name : the branch name must match the template in root/.validate-branch-namerc.js</li>
                    <li>commitlint : the name of the commit must match the <a href="https://www.conventionalcommits.org/en/v1.0.0/">conventional commit</a></li>
                    <li>Pre-commit hook running linter & validate-branch-name</li>
                    <li>Commit-msg hook checking the commit lint</li>
                </ul>
            </main>

            <footer className="h-20 flex justify-center items-center p-3 shadow-inner">
                Made with ❤ by Valentine
            </footer>
        </div>
    )
}

export default Home
