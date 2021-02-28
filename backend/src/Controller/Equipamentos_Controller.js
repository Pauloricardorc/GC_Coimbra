const conect = require('../Database/connection')

module.exports = {
    async index(req, res){
        const equipamentos = await conect('Equipamentos')

        return res.json(equipamentos)
    },

    async create(req, res){
        const { 
            cte_razao_social, cte_cnpj, cte_endereco, cte_telefone, 
            cto_razao_social, cto_cnpj, cto_endereco, cto_telefone,
            tipo_do_contrato,
            carencia, vigencia, valores, prazos,
            status
        } = req.body

        await conect('Equipamentos').insert({
            cte_razao_social, cte_cnpj, cte_endereco, cte_telefone, 
            cto_razao_social, cto_cnpj, cto_endereco, cto_telefone,
            tipo_do_contrato,
            carencia, vigencia, valores, prazos,
            status
        })

        return res.json({ 'success': 'Cadastro Comcluído com sucesso'})
    }
}