const { Oven } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const ovens = await Oven.findAll()
            res.send(ovens)
        } catch (err) {
            res.status(500).send({
                error: 'the Oven information was incorrect'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const oven = await Oven.create(req.body)
            res.send(oven.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Oven incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await Oven.update(req.body, {
                where: {
                    id: req.params.ovenId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Oven incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const oven = await Oven.findOne({
                where: {
                    id: req.params.ovenId
                }
            })
            if (!oven) {
                return res.status(403).send({
                    error: 'The Oven information was incorrect'
                })
            }
            await oven.destroy()
            res.send(oven)
        } catch (err) {
            res.status(500).send({
                error: 'The Oven information was incorrect'
            })
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const oven = await Oven.findByPk(req.params.ovenId)
            res.send(oven)
        } catch (err) {
            res.status(500).send({
                error: 'The Oven information was incorrect'
            })
        }
    }
}


