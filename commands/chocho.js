import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("red")
  .setDescription("Talk to Red.");

export async function execute(interaction) {
  await interaction.reply("Hello buddy");
}

