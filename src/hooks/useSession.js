import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuth} from "../middlewares/ProtectedRoutes";

const useSession = () => {
    const session = isAuth()
    const decodedSession = session ? jwtDecode(session) : null;

    const navigate = useNavigate()

    const checkTokenExpirationTime = () => {
        const convertUnixDateToMillisecond = decodedSession.exp * 1000
        const expirationDate = new Date(convertUnixDateToMillisecond)
        const currentDate = new Date()

        if (expirationDate < currentDate) {
            localStorage.removeItem('loggedInUser')
        }
    }

    useEffect(() => {
        if (!session) {
            navigate('/', { replace: true })
        }
        checkTokenExpirationTime()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate, session]);

    return decodedSession;
}

export default useSession;