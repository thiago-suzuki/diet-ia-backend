import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
  } from 'fastify'
  import { CreateNutritionController } from './controllers/CreateNutritionController'
  
  export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
      let responseText = "```json\n{\n  \"nome\": \"Thiago\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 21,\n  \"altura\": 1.75,\n  \"peso\": 110,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos com 1 fatia de queijo branco\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:30\",\n      \"nome\": \"Lanche da manhã\",\n      \"alimentos\": [\n        \"1 iogurte grego com granola\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis\",\n        \"Salada de folhas verdes com tomate e azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:30\",\n      \"nome\": \"Lanche da tarde\",\n        \"alimentos\": [\n          \"1 scoop de whey protein\"\n        ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 batata doce média\",\n        \"1 xícara de couve refogada\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"1 scoop de caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```"
      
      try{
        //Extrair o JSON
        let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
        let jsonObject = JSON.parse(jsonString)
        return reply.send({ data: jsonObject });   
      }catch(err){
        console.log(err)
      }
  
      reply.send({ ok: true })
    })
  
    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply)
    })  
}