Get started with Next 🚀
* NextJS  
* Prettier  
* ESLint  
* Husky  
* Jest  
* Cypress  
* Cucumber  
* Tailwind  
* validate-branch-name : the branch name must match the template in root/.validate-branch-namerc.js  
* commitlint : the name of the commit must match the <a href="https://www.conventionalcommits.org/en/v1.0.0/">conventional commit</a>  
* Pre-commit hook running linter & validate-branch-name  
* Commit-msg hook checking the commit lint  

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Cypress

To do one time :  
`./node_modules/.bin/cypress install`  
Create a `cypress.env.json` file containing :
```json
{
  "BASE_URL": "http://localhost:3000"
}
```

Run tests with :  
`npm run cypress:open`  
