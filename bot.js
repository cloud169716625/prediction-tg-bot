require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN_ID; // Replace with your bot token
const bot = new TelegramBot(token, { polling: true });

// Send the Web App button when the user starts the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Welcome to the Prediction App!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Prediction App",
            web_app: { url: "https://sui-tg-prediction.vercel.app/" }, // Replace with your app's URL
          },
        ],
      ],
    },
  });
});

bot.on("polling_error", console.log);
