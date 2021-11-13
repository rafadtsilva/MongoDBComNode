const Link = require('../models/Link')

const redirect = async (req, res) => {
    
    let title = req.params.title;
        
    try {
        let doc = await Link.findOne({title})
        // console.log(doc)
        res.redirect(doc.url);
    }catch (error) {
        res.send(`O parâmetro "${title}" não foi localizado no banco de dados`)
    }
    
}

const addLink = async (req, res) => {

    let link = new Link(req.body);

    try {
        let doc = await link.save();
        res.send("Link adicionado com sucesso!!!");
    } catch (error) {
        res.render('index', { error, body:req.body });
    }

}

const allLinks = async (req, res) => {
    try {
        let links = await Link.find({});
        res.render('all', { links });
    } catch {
        res.send(error);
    }
}


module.exports = { redirect, addLink, allLinks }