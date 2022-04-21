import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client) => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands);
        
        console.log(`${client.user.username} is online`);
    });
};