import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes";

const app = Fastify({ logger: false })
dotenv.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {
    app.register(cors);
    app.register(routes);

    const port = process.env.PORT ? Number(process.env.PORT) : 3333


    try {
        await app.listen({ port: port, host: "0.0.0.0" })
        console.log(`Server listening on port ${port}`)
    } catch (err) {
        console.log(err)
    }
}

start();