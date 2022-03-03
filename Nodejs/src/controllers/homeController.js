
let getHamePage = (req, res) => {
    return res.render('homepage.ejs')
}

module.exports = {
    getHamePage: getHamePage,
}