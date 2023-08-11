import React from 'react'

function Header2() {
    return (
        <>
            <Component>
                <Logo onClick={() => navigate("/")} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324' />

            </Component>
            <List>
                <Product>
                    <span>MEN</span>
                    <Dropdown>
                        <p>Hello World!</p>
                    </Dropdown>
                </Product>
                <Vr />
                <Product>
                    <span>WOMEN</span>
                    <Dropdown>
                        <p>Hello World!</p>
                    </Dropdown>
                </Product>
                <Vr />
                <Product>
                    <span>VIEW ALL</span>
                    <Dropdown>
                        <p>Hello World!</p>
                    </Dropdown>
                </Product>
                <Vr />
                <Product>
                    <span>ABOUT US</span>
                </Product>
                <Vr />
                <Product>
                    <span>CONTACT</span>
                </Product>
            </List>
            <nav className="navbar navbar-expand-lg bg-body border-bottom">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav col-11 justify-content-center m-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="m-auto">
                            <button className="btn link-secondary">Cart</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                        <button type="button" className="btn btn-primary">Sign-up</button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header2

const Component = styled.div`
    background-color: cadetblue;
    width:100%;
    padding: 5px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Logo = styled.img`
    height: 55px;
    width: 150px;
    display: block;
    margin-left: 10px;
    background-color: aquamarine;
`

const List = styled.div`
    width: auto;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 10vw;
    background-color: aquamarine;
`

const Vr = styled.div`
    height: 25px;
    width: 1px;
    background: black;
`

const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 6.7rem;
    background-color: #f9f9f9;
    border-radius: 2px;
    min-width: 160px;
    box-shadow: 0px 4px 12px 2px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;

    &:before{
        content:"";
        position: absolute;
        top: -10px;
        left: 10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #f9f9f9;
    }
`

const Product = styled.div`
    
    span{
        position:relative;
        cursor: pointer;
        &:after{
                content: "";
                height: 2px;
                background: black;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -3px;
                opacity: 0;
                transform-origin: center;
                transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
        }
    }
    &:hover{
        ${Dropdown}{
            display:block;
        }
        span::after{
            transform: scaleX(1);
            opacity: 1;
        }
        
    }
`