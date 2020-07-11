'use strict';
let config = require('config');
let stoneFee = config.get('stone').paytxfee;
let aevoFee = config.get('aevo').paytxfee;
let prefix = config.get('bot').prefix;
exports.commands = ['help'];
exports.help = {
  usage: '<subcommand>',
  description: 'This commands has been changed to currency specific commands!',
  process: function(bot, message) {
    message.author.send(
      '__**Supported Coins**__\n' +
      '  **Stonecoin (STONE) Tipper**\n    Transaction Fees: **' + stoneFee + '**\n' +  
      '  **Aevocoin (AEVO) Tipper**\n    Transaction Fees: **' + aevoFee + '**\n' + 
      '__**Commands**__\n' +
      '  **' + prefix + '<CoinSymbol>** : Displays This Message\n' +
      '  **' + prefix + '<CoinSymbol> balance** : get your balance\n' +
      '  **' + prefix + '<CoinSymbol> deposit** : get address for your deposits\n' +
      '  **' + prefix + '<CoinSymbol> withdraw <ADDRESS> <AMOUNT>** : withdraw coins to specified address\n' +
      '  **' + prefix + '<CoinSymbol> <@user> <amount>** :mention a user with @ and then the amount to tip them\n' +
      '  **' + prefix + '<CoinSymbol> private <user> <amount>** : put private before Mentioning a user to tip them privately\n' +
      '  **' + prefix + '<CoinSymbol> supply** : current supply of the coin, if available.\n' +
      '  **' + prefix + '<CoinSymbol> block** : current block height of the coin, if available.\n' +
      '**<> : Replace carrot <> symbole with appropriate value.**\n' +
      '__**Examples**__\n' +
      '  **' + prefix + 'stone @FreakHouse 10**\n' +
      '  **' + prefix + 'stone withdraw STONEaddressHERE 10**\n' +
      '  **' + prefix + 'aevo private @FreakHouse 10**\n' +
      '  **' + prefix + 'stone balance**\n' +
      '  **' + prefix + 'aevo deposit**\n' +
      '  **' + prefix + 'stone supply**\n' +
      '  **' + prefix + 'aevo block**\n'
    );
  }
};
