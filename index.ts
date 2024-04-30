import { Client, GatewayIntentBits, ActivityType  } from "discord.js";
import { Bot } from "./structs/Bot";
import { Server } from "http";

const bot = new Bot(
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

bot.client.on("ready", () => {
  console.log("Bot đã sẵn sàng!");
  if (bot.client.user) {
    bot.client.user.setActivity({
      type: ActivityType.Custom,
      name: "Daubuoi",
      state: "daubuoi.xyz",
    });
    bot.client.user.setPresence({
      status: "online",
    });

    let activities = [ 
      `daubuoi.xyz`,
      `music /play`,
    ]
    let i = 0;
    setInterval(() => {
      if (bot.client.user) {
        bot.client.user.setActivity({
          name: activities[i++ % activities.length],
          type: ActivityType.Listening,
        });
      }
    }, 5000);
  } else {
    console.error("Bot chưa đăng nhập thành công.");
  }
});

export { bot };