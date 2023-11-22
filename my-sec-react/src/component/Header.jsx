import "../css/Kuda.css"
import kudaIcon from "../assets/Images/kuda icon 2.png"
import flag from "../assets/Images/flag.svg"
const Header = ()=> {
    return (
        <>
            <nav>
                <div className="ii">
                    <div className="ki">
                        <a id="icon" href="#"><img height="17" width="80" src={kudaIcon} alt=""/></a>
                    </div>
                    <div className="info">
                        <a className="navbar" href="#">Personal<svg className="arrow" width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></a>
                        <a className="navbar" href="#">Business<svg className="arrow" width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></a>
                        <a className="navbar" href="#">Company<svg className="arrow" width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></a>
                        <a className="navbar" href="#">Help<svg className="arrow" width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M4.5 6L0 0H9L4.5 6Z" fill="#40196D"></path></svg></a>
                    </div>
                </div>
                <div className="nbf">
                    <a className="navbar" href="">Sign In</a>
                    <button href="#" id="button">Join Kuda</button>
                    <a id="flag" href="#"><img src={flag} alt="" /></a>
                </div>
            </nav>
        </>
    )
}
export default Header


 