export default function MenuButton({open,onClick}){return <button className="menu-button" onClick={onClick} aria-label="Meni">{open?'×':'☰'}</button>}
