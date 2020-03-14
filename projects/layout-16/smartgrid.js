module.exports = {
    outputStyle: 'scss',
    columns: 12,
    offset: "30px",
    //mobileFirst: true,
    container: {
        maxWidth: "1230px",
        fields: "30px"
    },
    breakPoints: {
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
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