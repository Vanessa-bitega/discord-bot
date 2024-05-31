import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import * as red from "./commands/chocho.js";
import * as help from './commands/help.js'
//import('./deploy-commands.js')
config();
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
  console.log("🤪 " + client.user.tag + " is connected!");
}
async function handleInteraction(interaction) {
  if (!interaction.isCommand()) return;
    switch (interaction.commandName) { 
        case 'red':
            await red.execute(interaction);
            break;
        case 'help':
            await help.execute(interaction);
            break;
        default:
    }
    
}

client.once(Events.ClientReady, readyDiscord);

client.on(Events.InteractionCreate, handleInteraction);
client.login(process.env.TOKEN);