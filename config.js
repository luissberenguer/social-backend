const config = {
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "user",
    password: process.env.MYSQL_PASS || "user1234",
    database: process.env.MYSQL_DB || "social-backend",
  },
};

module.exports = config;
