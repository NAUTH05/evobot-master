import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import { Bot } from "./structs/Bot";
import { stat } from "fs";

export const bot = new Bot(
  new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages
    ]
  })
);

bot.client.once("ready", () => {
  console.log("Bot is ready!");

  bot.client.user!.setPresence({
    activities: [
      {
        name: "listening to your commands",
        type: "1" as unknown as ActivityType,
      },
    ],
  });

  bot.client.user!.setStatus("online"); // Thiết lập trạng thái của bot
  
  console.log("Bot status:", bot.client.user?.presence?.status);
});
