module.exports = {
  name: 'mention',
  description: 'Responds when "Mot," "Oyamat," or "Sol" is mentioned',
  nashPrefix: false,
  execute(api, event, args) {
    const message = event.body.toLowerCase();
    if (message.includes('Mot') ||
message.includes('oyamat') || 
message.includes('Sol') ||
message.includes('sol') ||
message.includes('mot') || message.includes('Oyamat')) {
      api.sendMessage("Mot Mot Oyamat is bussy", event.threadID, event.messageID);
    }
  },
};
