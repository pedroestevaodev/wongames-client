# WonGames - E-commerce Client

<br/>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo-gh.svg">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://raw.githubusercontent.com/Pedro-Estevao/boilerplate-nextjs/master/public/img/logo.svg">
</picture>

<br/>

This repository contains the **client** for the main project, an **e-commerce platform for games**, developed during the [React Avançado](https://reactavancado.com.br/) course, which teaches advanced React concepts while building a complete e-commerce platform. The project focuses on creating a game sales platform with an optimized shopping experience, authentication, e-commerce features, payments, and much more.

## 📌 About the Project

<p style="text-align: center;">
  <a href="https://www.pedroestevao.com">
    <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1741210796/github/whfxa6ermismpztvumnf.png" alt="illustrative image" />
  </a>
</p>

The project was developed using the following technologies and tools:

- [Next.js](https://nextjs.org/) - React framework for web applications.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript superset for static typing.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for fast and customizable design.
- [Styled Components](https://styled-components.com/) - Library for styling components using CSS-in-JS.
- [Jest](https://jestjs.io/) - JavaScript testing framework.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Testing library for React focused on interaction with the interface.
- [Storybook](https://storybook.js.org/) - Tool for developing isolated components and visualizing them.
- [MSW (Mock Service Worker)](https://mswjs.io/) - Tool for mocking APIs and testing interactions with services.
- [Prettier](https://prettier.io/) - Code formatter.
- [Eslint](https://eslint.org/) - Linter to ensure code quality and consistency.
- [Auth.js](https://authjs.dev/) - Authentication library.
- [Stripe](https://stripe.com/) - Payment platform for e-commerce.
- [GraphQL Codegen](https://www.graphql-code-generator.com/) - Tool to automatically generate GraphQL code.
- [Apollo Client](https://www.apollographql.com/docs/react/) - Client to integrate GraphQL with React.
- [Husky](https://typicode.github.io/husky/) - Git hook tool.
- [GitHub CI](https://github.com/features/actions) - Continuous Integration on GitHub.

## 🚀 Requirements

To run the Client, you need to have the API pre-configured on your machine.
This client project consumes the WonGames API, available in the [wongames-api](https://github.com/Pedro-Estevao/wongames-api) repository. The API provides dynamic data such as games, categories, and payment information.

- **API Repository (e-commerce backend):** [WonGames API](https://github.com/Pedro-Estevao/wongames-api)
- **FIGMA DESIGN:** [WonGames Design](https://www.figma.com/design/ovvUTvKUFwLzOlU2LNmohM/Won-Games-English?node-id=43-1&p=f&t=5FZQegZOJjGpufOd-0)

## 🔧 Setup and Installation

### 1️. Install dependencies:
```bash
$ pnpm install
```

### 2️. Create the `.env` file

Create an `.env` file in the root of the project, or edit if it already exists, similar to the following structure:

```bash
NEXT_PUBLIC_API_URL="http://localhost:1337"
NEXT_PUBLIC_GRAPHQL_SCHEMA="http://localhost:1337/graphql"
AUTH_URL="http://127.0.0.1:3000"
AUTH_SECRET="tobemodified"
APPLICATION_URL="http://127.0.0.1:3000"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="tobemodified"
NODE_ENV="tobemodified"
```

## 📦 What’s Included?

This project includes everything you need to start working on the game e-commerce frontend. Key features include:

- **Authentication and Authorization**: Integration with Auth.js for login and session management.
- **UI Components**: Build reusable and testable components with React and Styled Components.
- **Testing**: Automated tests using Jest and React Testing Library, along with API tests using MSW.
- **Component Visualization**: Develop isolated components using Storybook.
- **API Integration**: Consumes the e-commerce game API, using Apollo Client and GraphQL for communication.

## 📜 Commands

To run the development server locally, just execute the following command:

```bash
$ pnpm run dev
```

Open your browser and visit http://localhost:3000 to see the project in action.

You can start editing the homepage by modifying the `app/page.tsx` file. The browser will automatically update as you make changes to the code.

Here are the main commands available for the project:

- `dev`: Starts the application in development mode on localhost:3000.
- `build`: Creates a production version of the application.
- `start`: Starts a simple server with the production code.
- `lint`: Runs the linter on all project files.
- `typecheck`: Check for type errors according to the configuration in the `tsconfig.json` file.
- `test`: Runs Jest tests for the application. The --passWithNoTests flag ensures that Jest doesn't fail if no tests are found.
- `test:watch`: Runs automated tests with Jest in watch mode.
- `test:ci`: Runs Jest tests in Continuous Integration (CI) mode, ensuring tests run serially (--runInBand) for better debugging and no parallelization.
- `generate`: Runs Plop.js, a tool for code generation, using the plopfile.js configuration to create files or templates.
- `storybook`: Starts Storybook to visualize components on localhost:6006.
- `build-storybook`: Creates the production version of Storybook.
- `codegen`: Runs the GraphQL Code Generator to generate types and other code based on the GraphQL queries defined in the project, using the configuration defined in codegen.ts.
- `prepare`: Installs and sets up Git hooks with Husky, which allows you to enforce rules and scripts before committing or pushing code (e.g., running linters or tests before commit).

## 📚 Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Documentação do Next.js](https://nextjs.org/docs) - Learn more about Next.js features and APIs.
- [Aprenda Next.js](https://nextjs.org/learn) - Interactive tutorial to learn Next.js.
- [Documentação do React](https://pt-br.react.dev/learn) - Access the official React guide.
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs) - Learn how to use Tailwind CSS to style your application.

## ☁️ Deploy on Vercel

The easiest way to deploy your Next.js application is by using the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the developers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📓 How to Use this Client

This project was developed to be the official client for the e-commerce platform. If you wish to run or contribute to this client, follow the instructions above to set up the development environment and start working.

<p style="text-align: center;">
  <a href="https://www.pedroestevao.com">
    <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1741210793/github/tg2nycflw9z0duxhwye2.png" alt="illustrative image" />
  </a>
</p>