import { Outlet } from "react-router-dom";
import "../styles/AuthLayout.css"
function AuthLayout () {
    return (
        <div className="auth-layout">
            <Outlet />
        </div>
    )
}
export default AuthLayout