# Post viewer

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

An SPA that presents an initial list of 20 posts, with the ability to click through to individual posts that show the full text.
Shows a notification when a new latest post is found (every 10 seconds), and loads the next page of posts via infinite loading

## Uses

- [React 18](https://react.dev/)
- [NextJs 15](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Redux / RTK](https://redux-toolkit.js.org/)
- [DummyJSON](https://dummyjson.com/)

- [Jest / React-testing-library](https://testing-library.com/docs/react-testing-library/intro/): `npm run test`
- [Playwright](https://playwright.dev): `npm run test:e2e`

## Getting Started

Setting your node version and installing:
`nvm use && npm i`

Build:
`npm run build`

Run:
`npm run start`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- React version was bumped down to v18 as there were install and initialisation errors with redux/rtk
