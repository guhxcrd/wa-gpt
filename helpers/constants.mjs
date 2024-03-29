export const START_MESSAGE = "Start using WhatsApp AI Assistant";
export const START_MESSAGE_REPLY = "Hello! 👋 I am your WhatsApp AI Assistant 🤖 I can help you with your queries. Please type your query and I will try to help you. You can generate images 🖼️ or stickers using the /image and /sticker commands"
export const BOT_PHONE_NUMBER = "+201064134160";
export const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${BOT_PHONE_NUMBER}&text=${START_MESSAGE.replace(/ /g, "%20")}`;
export const MAX_NUMBER_OF_MESSAGES = 30;
export const SUMMARIZE_SYSTEM_MESSAGE = { content: "Summarize the conversation so far.", role: "system"}
export const WHATSAPP_MAX_TEXT_LENGTH = 4096;
export const DALLE_MAX_TEXT_LENGTH = 1000;
export const STICKER_WAIT_MESSAGE = "Hold tight! your awesome sticker is being generated ⏳";
export const IMAGE_WAIT_MESSAGE = "Hold tight! I'm generating your image ⏳🖼️";
export const FREE_STARTER_QUOTA = 5;
export const TEXT_TOKEN_COST = 1/150;
export const TEXT_TOKEN_COST_FREE = 1/50;
export const IMAGE_TOKEN_COST = 1;
export const STICKER_TOKEN_COST = 1;
export const RATE_LIMIT_ERROR_MESSAGE = "rate_limit_exceeded";
export const RATE_LIMIT_MESSAGE = "I'm sorry, I'm currently experiencing a high volume of requests. Please try again later. 🙏";
export const GUMROAD_PAYMENT_URL = "https://levw.gumroad.com/l/whatsapp";
export const GUMROAD_UPDATE_SUBSCRIPTION_URL = "https://app.gumroad.com/subscriptions";
export const TIERS = {
    "Basic Plan": 50,
    "Standard Plan (Best Deal)": 200,
    "Pro Plan": 500,
}
export const GUMROAD_RESOURCE_TYPES = {
    SALE: "sale",
    SUBSCRIPTION_RESTARTED: "subscription_restarted",
    SUBSCRIPTION_UPDATED: "subscription_updated",
    SUBSCRIPTION_ENDED: "subscription_ended",
    CANCELLATION: "cancellation",
    REFUND: "refund",
    DISPUTE: "dispute",
    DISPUTE_WON: "dispute_won",
}
export const unSubscribeResourceTypes = [GUMROAD_RESOURCE_TYPES.SUBSCRIPTION_ENDED, GUMROAD_RESOURCE_TYPES.CANCELLATION, GUMROAD_RESOURCE_TYPES.REFUND, GUMROAD_RESOURCE_TYPES.DISPUTE, GUMROAD_RESOURCE_TYPES.DISPUTE_WON];