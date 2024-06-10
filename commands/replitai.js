const axios = require('axios');

module.exports = {
    name: 'replitai',
    description: 'REPLIT AI by mot oyamat',
    aliases: ['repAi', 'rep'],
    cooldown: 3,
    nashPrefix: false,
    execute: async (api, event, args) => {
        const input = args.join(' ');

        if (!input) {
            api.sendMessage(
                `Yes...`,
                event.threadID,
                event.messageID
            );
            return;
        }

        api.sendMessage(`Processing your request...`, event.threadID, event.messageID);

        try {
            const { data } = await axios.get(`https://hazeyy-api-useless.kyrinwu.repl.co/api/replit/ai?input=${encodeURIComponent(input_text)}`);
            const response = data.content;

            const finalResponse = `${response}`;
            api.sendMessage(finalResponse, event.threadID, event.messageID);
        } catch (error) {
            api.sendMessage('An error occurred while processing your request, please try sending your question again', event.threadID, event.messageID);
            console.error(error);
        }
    },
};
