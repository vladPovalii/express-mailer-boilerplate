var config = {
    development: {
        mailer: {
            from: "example@gmail.com",
            to: "example@gmail.com",
            pass: "password",
            host: "smtp.gmail.com",
            isSecure: true,
            port: 465
        }
    },
    production: {
        mailer: {
            from: "example@gmail.com",
            to: "example@gmail.com",
            pass: "password",
            host: "smtp.gmail.com",
            isSecure: true,
            port: 465
        }
    }
};
module.exports = config;