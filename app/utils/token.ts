import { errorResponse } from "./response"
import jwt from "jsonwebtoken"

const getToken = (req: Request) => {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) return errorResponse("Unauthorized user.")

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string
    }

    return decoded.id
}

export default getToken