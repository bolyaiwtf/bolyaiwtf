# bolyaiwtf

This is yet another rewrite of the bolyai.wtf website. It was made using the Next.js framework and uses MongoDB as its database provider. It supports serverless deployment using ZEIT Now and MongoDB Atlas.

## Getting Started

Clone the repo:

```
git clone git@github.com:bolyaiwtf/bolyaiwtf.git
cd bolyaiwtf
```

Install the dependencies:

```
npm i -g yarn
yarn
```

Create a `config.json` that contains your MongoDB connection string:

```
cp config.example.json config.json
vi config.json
```

## Starting the Server with Hot Reload

```
yarn dev
```

## Building for Production

```sh
yarn build
```

## Deployment

Deployment can be done using ZEIT Now.

```sh
now
# or now --prod
```

## What?

bolyai.wtf is a JOKE PROJECT. It is a random message generator specifically tied to student life in the Bolyai Farkas High School from Marosvásárhely, Romania. bolyai.wtf is in no way affiliated with the high school.

## License

MIT.
