import  asynchandler  from "../utils/asynchandler.js"

const registerUser = asynchandler(async (req, res) => {
    res.status(500).json({
        message:"chai aur code"

    }) }
)

export {registerUser}