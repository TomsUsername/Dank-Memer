exports.run = async function (client, msg, args, config, RichEmbed, thonk, connection) {
	thonk.table('stats').run(connection, function (err, cursor) {
		if (err) throw err
		cursor.toArray(function (err, result) {
			if (err) throw err
			console.log(JSON.stringify(result, null, 2))
		})
	})
}