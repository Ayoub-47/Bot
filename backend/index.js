import { Configuration , OpenAIApi} from "openai";
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
const port = 8000;
app.use(bodyParser.json);
app.use(cors());

const configuration = new Configuration({
    organization: "org-GR6yl2w0zKyaNckmE7fIzx5V",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) =>{
    console.log("received request from frontend");
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

