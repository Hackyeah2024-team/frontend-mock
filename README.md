# Tabular
Tabular is a modern solution to help schools and students with a learning process.
Its main goal is enhancing education with data analysis and machine learning in order
to provide personalized learninig paths and hints for users.

## Project showcase
[Tabular](https://tabular.frankoslaw.top/)

## Technology
This mock user interface is made using [Next.js](https://nextjs.org/) with [Tailwind](https://tailwindcss.com/) and [Shadcn/UI](https://ui.shadcn.com/)
for basic components. It is meant to show possible layout and views available in the real application.

## Building and running locally
For ease of use this project provides [Dockerfile](./Dockerfile) that can be used to build and run this locally without
worrying about dependencies and other stuff. To build and run the project you can run the following commands:
```sh
# Build docker image
docker build -t hy-24-tabular-mock .

# Run docker image
docker run -d -p 3000:3000 hy-24-tabular-mock
```

Please remember to have docker engine installed on your system!
