import { User } from '../models/user.js'


const getTopUsers = async (req, res) => {
    try {
        const users = await User.find()
            .sort({ solution_count: -1 })
            .limit(5)
        return res.status(200).json(users)

    } catch (error) {
        return res.status(500).send(error.message, 'Could not find users')
    }
}



export {
    getTopUsers
}