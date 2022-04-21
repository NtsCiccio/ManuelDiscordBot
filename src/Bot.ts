import 'dotenv/config';

import { Client, ClientOptions } from "discord.js";

import interactionCreate from './listeners/InteractionCreate';
import ready from './listeners/ready';

console.log("Starting bot...");

const client = new Client({
    intents:[]
});

ready(client);
interactionCreate(client);

client.login(process.env.TOKEN);
