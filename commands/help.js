import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Talk to Red.");

export async function execute(interaction) {
  await interaction.reply("Hi I'm Red, How can i help you?..");
}

