import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User.js'

class UserController {
    async store(request, response) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            address: Yup.string().required(),
            phone: Yup.string().required(),
            email: Yup.string().email().required(),
            birthday: Yup.string().required(),
            login: Yup.string().required(),
            password: Yup.string().required().min(6),
            admin: Yup.boolean()
        })

        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const { filename: path } = request.file

        const {
            name,
            address,
            phone,
            email,
            birthday,
            login,
            password,
            admin
        } = request.body

        const userExists = await User.findOne({
            where: { email },
        })

        if (userExists) {
            return response.status(409).json({ error: 'User already exists' })
        }

        const user = await User.create({
            id: v4(),
            name,
            address,
            phone,
            email,
            birthday,
            login,
            password,
            admin,
            path
        })

        return response.status(201).json(
            {
                id: user.id,
                name,
                address,
                phone,
                email,
                birthday,
            }
        )
    }

    async index(request, response) {

        const users = await User.findAll()

        return response.json(users)
    }
}

export default new UserController()