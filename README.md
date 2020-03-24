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

## Starting the Server with Hot Reload

```
MONGO_CONNECTION_STRING=your_mongo_connection_string yarn dev
```

## Building for Production

```sh
MONGO_CONNECTION_STRING=your_mongo_connection_string yarn build
```

## Deployment

Deployment can be done using ZEIT Now. Add your connection string to your secrets:

```
now secrets add bolyaiwtf-mongo-connection-string your_connection_string
```

And deploy:

```sh
now
# or now --prod
```

## What?

bolyai.wtf is a JOKE PROJECT. It is a random message generator specifically tied to student life in the Bolyai Farkas High School from Marosvásárhely, Romania. bolyai.wtf is in no way affiliated with the high school.

## License

MIT.
