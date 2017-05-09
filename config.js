var config = {
    development: {
        mailer: {
            from: "Consimple.it@gmail.com",
            to: "office@consimple.com",
            pass: "Consimple13",
            host: "smtp.gmail.com",
            isSecure: true,
            port: 465
        }
    },
    production: {
        mailer: {
            from: "Consimple.it@gmail.com",
            to: "office@consimple.com",
            pass: "Consimple13",
            host: "smtp.gmail.com",
            isSecure: true,
            port: 465
        }
    }
};
module.exports = config;