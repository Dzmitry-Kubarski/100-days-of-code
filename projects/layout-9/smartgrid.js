module.exports = {
    outputStyle: 'scss',
    columns: 12,
    offset: "30px",
    //mobileFirst: true,
    container: {
        maxWidth: "1354px",
        fields: "30px"
    },
    breakPoints: {
        md: {
            width: "960px",
            fields: "15px"
        },
        sm: {
            width: "768px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px",
            /*
            offset: "10px",
            fields: "5px"
            */
        }
    },
    //detailedCalc: true
};