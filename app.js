const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on("guildMemberAdd", (member) => {
	let guild = member.guild;
	guild.defaultChannel.sendMessage("Welcome, @" + member.user.username + " to Wardonic WoW's Discord Channel. I am Wardonic Overseer. Wardonic World of Warcraft is a 3.3.5a Wrath of the Lich King private server featuring it's complete custom content and professional staff team.");
});

bot.on("guildMemberAdd", (member) => {
	member.sendMessage("Welcome to Wardnoic World of Warcraft. Please remember to check the announcements so you can see the list of questions so that you can get immediate help when needed. If you ask staff members questions that are compatable with my system, it is extremely likely that you will not get a response.");
});

const config = require("./config.json");



bot.on("message", (message) => {
	let command = message.content.split(" ")[0];
	command = command.slice(config.prefix.length);
	if (command === "clear") {
    let modRole = message.guild.roles.find("name", "StaffMember");
	let cleanChat = message.channel;


   if(message.member.roles.has(modRole.id)) {
    cleanChat.bulkDelete(100).then(messages => {
      message.reply('Messages were cleared').catch(console.error);
    })
    }
	}
});

bot.on('message', (message) => {
  if(message.content === "Hello Wardonic Overseer!") {
    message.channel.sendMessage("Hello!");
  }
  if(message.content === "Are you guys hiring?") {
    message.channel.sendMessage("Currently we are hiring, for help to see on how you can get a job here, see a Staff member.");
  }
  if(message.content === "Who is the owner of Wardonic WoW?") {
    message.channel.sendMessage("UnknownGhost is the Project Leader of Wardonic WoW.");
  }
});

bot.on("ready", () => {
  bot.user.setGame('Wardonic WoW');
});


bot.on('message', (message) => {
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  if (command === "kick") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please mention a user to kick").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
      return message.reply("I don't have the permissions (KICK_MEMBER) to do this.").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked.`).catch(console.error);
    }).catch(console.error)
  }
});

bot.on('message', (message) => {
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  if (command === "ban") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please mention a user to ban").catch(console.error);
    }
    let banMember = message.guild.member(message.mentions.users.first());
    if (!banMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("I don't have the permissions (BAN_MEMBERS) to do this.").catch(console.error);
    }
    banMember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully banned.`).catch(console.error);
    }).catch(console.error)
  }
});

bot.on('message', (message) => {
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  if (command === "unban") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    let unbanMember = message.content.split(" ")[1];
    if (!unbanMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let username = message.content.split(' ').slice(1).join('');
    let guild = message.guild;
    guild.fetchBans().then(bannedUsers => {guild.unban(bannedUsers.find('username', username));
    return message.reply("User has been unbanned");
  })
}
});

bot.on('message', (message) => {
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  if (command === "addroleBP") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Beta Player");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Beta Player");
}
    if (command === "addroleSM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "StaffMember");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to StaffMember");
    }
    if (command === "addroleGM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Game Master");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Game Master");
    }
    if (command === "addroleDA") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Donation Administrator");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Donation Administrator.");
    }
    if (command === "addroleDT") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Developer Team");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Developer Team");
    }
    if (command === "addroleSUGM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Super Game Master");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Super Game Master");
    }
    if (command === "addroleLD") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Lead Developer");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Lead Developer");
    }
    if (command === "addroleSECM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Senior Game Master");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Senior Game Master");
    }
    if (command === "addroleA") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Administrator");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Administrator");
    }
    if (command === "addroleDS") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Discord-Staff");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Discord-Staff");
    }
    if (command === "addroleDOT") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to addrole to.").catch(console.error);
    }
    let addroleMember = message.guild.member(message.mentions.users.first());
    if (!addroleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Donation Team");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been added to Donation Team");
    }
  
});

bot.on('message', (message) => {
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  if (command === "removeroleBP") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Beta Player");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Beta Player.");
}
    if (command === "removeroleDOT") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Donation Team");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Donation Team");
    }
    if (command === "removeroleMod") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Moderator");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Moderator");
    }
    if (command === "removeroleGM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Game Master");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Game Master.");
    }
    if (command === "removeroleDA") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Donation Administrator");
    let member = message.guild.member(message.mentions.users.first());
    member.addRole(role).catch(console.error);
    return message.reply("User has been removed to Donation Administrator");
    }
    if (command === "removeroleDT") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Developer Team");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Developer Team");
    }
    if (command === "removeroleSUGM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Super Game Master");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been addremoveded to Super Game Master");
    }
    if (command === "removeroleLD") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Lead Developers");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Lead Developers");
    }
    if (command === "removeroleSM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "StaffMember");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to StaffMember");
    }
    if (command === "removeroleSEGM") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Senior Game Master");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Senior Game Master");
    }
    if (command === "removeroleA") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Administrator");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Administrator");
    }
    if (command === "removeroleDS") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Discord-Staff");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Discord-Staff");
    }
    if (command === "removeroleMan") {
    let modRole = message.guild.roles.find("name", "StaffMember");
    if (!message.member.roles.has(modRole.id)) {
      return message.reply("You do not have the permission to use this command.").catch(console.error);
    }
    if (message.mentions.users.size === 0) {
      return message.reply("Please pick a user to removeRole to.").catch(console.error);
    }
    let removeRoleMember = message.guild.member(message.mentions.users.first());
    if (!removeRoleMember) {
      return message.reply("That user does not seem valid");
    }
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
      return message.reply("I don't have the permissions to do this.").catch(console.error);
    }
    let role = message.guild.roles.find("name", "Manager");
    let member = message.guild.member(message.mentions.users.first());
    member.removeRole(role).catch(console.error);
    return message.reply("User has been removed to Manager");
    }
});



bot.login('MjY0Mjg3MDQ2NzIwNDIxODg4.C03-HA.W6NmKfPzWQUrKN_8IG_CQ-JajA8');
