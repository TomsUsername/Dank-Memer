const {
	henlo
} = require('../assets/arrays.json')
exports.run = async function (Memer, msg) {
	if (!args[0]) {
		let mention = msg.author.username
		let text = Memer.randomInArray(henlo)
	} else if (msg.mentions.length > 0) {
		let mention = msg.mentions[0].username
		let text = args[1] ? args[1] : Memer.randomInArray(henlo)
	} else if (msg.mentions.length === 0) {
		let mention = msg.author.username
		let text = args[0] ? args[0] : Memer.randomInArray(henlo)
	} else {
		return msg.create('hmm, you seemed to find a way to break this. GG at beating my 5am brain.')
	}

	msg.channel.create(`henlo ${mention}\nyou stinky ${mention}\ngo ${text} ugly`)
}

exports.props = {
	name: 'henlo',
	usage: '{command} @user thing to do',
	aliases: ['stinky'],
	cooldown: 1000,
	description: 'teach that stinky BOI a lesson'
}