require('./setup.js')();
require('./dialogs/dialogs.js')();

bot.endConversationAction('goodbyeAction', "Ok... See you later.", { matches: 'Goodbye' });


// when bot was added, auto trigger the root dialog.
bot.on('conversationUpdate', function (message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function (identity) {
            if (identity.id === message.address.bot.id) {
                bot.beginDialog(message.address, '/');
            }
        });
    }
});