import cocretaLogo from './assets/cocretainc.jpg'

function Header() {
    return (
      <header className="header">
        <img src={cocretaLogo} alt="Logo cocreta" className="logo" />
        <h1>Cocreta INC - Empleados</h1>
      </header>
    );
  }
  
  export default Header;


