# Post viewer

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Uses

- [React 18](https://react.dev/)
- [NextJs 15](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Redux / RTK](https://redux-toolkit.js.org/)
- [DummyJSON](https://dummyjson.com/)

## Highlights

- Fetches initial 20 posts for root page at build time and hydrates initial redux state
- Polls for and receives a new post every 10 seconds

## Getting Started

Setting your node version:
`nvm use`

Build:
`npm run build`

Run:
`npm run start`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- React version was bumped down to v18 as there were install and initialisation errors with redux/rtk
