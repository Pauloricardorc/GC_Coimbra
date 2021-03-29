const conect = require('../Database/connection')

module.exports = {
    async index(req, res){
        const {tipo_do_contrato} = req.query
        const {status} = req.query
        const {i_vigencia} = req.query

        if (tipo_do_contrato == '' && status == ''&& i_vigencia == '') {
            const Gestao_de_contrato = await conect('Gestao_de_contrato')
                .select('*')
            return res.json(Gestao_de_contrato)
        }   

        const Gestao_de_contrato = await conect('Gestao_de_contrato')
            .where({tipo_do_contrato})
            .orWhere({i_vigencia})
            .orWhere({status})
            .orWhere({tipo_do_contrato})
            .select('*')

        return res.json(Gestao_de_contrato)

    },
}