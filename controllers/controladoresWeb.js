const controladoresWeb = {
    root: (req, res) => {
        res.redirect('/productos');
    }
}

module.exports = { controladoresWeb }
