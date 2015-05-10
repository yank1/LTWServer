// config/database.js
module.exports = {
    'connection': {
        'host': process.env.MYSQL_PORT_3306_TCP_ADDR || 'localhost',
        'user': process.env.MYSQL_USERNAME || 'root',
        'password': process.env.MYSQL_PASSWORD || 'test123'
    },
	'database': process.env.MYSQL_INSTANCE_NAME || 'my_schema',
    'users_table': 'users'
};