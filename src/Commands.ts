import { BaseCommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";

import { Hello } from "./commands/Hello";

export interface CommandType extends ChatInputApplicationCommandData {  
    run: (client: Client, interaction: BaseCommandInteraction) => void;
}

export const Commands: CommandType[] = [Hello];
