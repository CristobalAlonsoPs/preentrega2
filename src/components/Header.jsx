export default function Header({titulo}){
    return (
        <nav className="nav-container light-blue darken-2">
            <a className="brand-logo center">{titulo}</a>
        </nav>
    )
}