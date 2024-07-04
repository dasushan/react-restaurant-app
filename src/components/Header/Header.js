import "./Header.css"
const Header = () => {
    return(<div className="header">
        <h1 className="header-main"> React Meals</h1>
        <div className="header-cart">
            <h3>Your Cart</h3>
            <span>2</span>
        </div>
    </div>)
}

export default Header