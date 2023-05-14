import { Configuration , OpenAIApi} from "openai";
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
    apiKey: "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"
    
});

const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) =>{
    
    console.log("received request");
    const {chats} = request.body;


    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role:"system",
                content:"you are a junior software engineer"
            },
            ...chats
        ]
    });

    response.json({
        output: result.data.choices[0].message,
    })
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

