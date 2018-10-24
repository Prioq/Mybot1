const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "!"
client.on('message', message => {
	let args = message.content.split(' ').slice(1);
	var result = args.join(' ');

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + 'send')) {
		client.channels.get('245491978601627648').sendMessage('Hello from second channel!');
	} else

	if (message.content.startsWith(prefix + 'setgame')) {
		if (!result) {
			result = null;
		}
		client.user.setGame(result);
	} else

	if (message.content.startsWith(prefix + 'setstatus')) {
		if (!result) {
			result = 'online';
		}
		client.user.setStatus(result);
	} else

	if (message.content.startsWith(prefix + 'foo')) {
		message.channel.sendMessage('bar');
    }
     if (message.content.startsWith(prefix+"createvc")){
              if ( message.guild.channels.find(channel => channel.name === message.author.tag)) {
              return message.reply("You already have got a channel")
              } else { 
                if (message.content.startsWith(prefix+"createvc")){
                if (!message.guild.channels.find(channel => channel.name === message.author.tag))
      message.reply("Successfully created")
    let guild = message.guild;
                  
guild.createChannel(message.author.tag, 'voice').then(channel => {
channel.setParent("499756394900226072")
channel.overwritePermissions(message.author, {
  VIEW_CHANNEL: true,
  CONNECT: true,
  MUTE_MEMBERS: true,
  DEAFEN_MEMBERS: true
}).then(channel => {
channel.overwritePermissions(guild.id, {
 VIEW_CHANNEL: false,
 CONNECT: false
})
});
  
})
                  
                }
              }
  }
  if (message.content.startsWith(prefix+"allowvc")){
    let member = message.mentions.users.first();
    if ( message.guild.channels.find(channel => channel.name === message.author.tag)) {
        channel.overwritePermissions(member, {
            VIEW_CHANNEL: true,
            CONNECT: true
                      })
                      message.channel.sendMessage("Permissions granted!")
    }
}
});

client.login(token);