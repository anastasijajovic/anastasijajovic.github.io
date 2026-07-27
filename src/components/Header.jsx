import {useState} from 'react'; import Logo from './Logo'; import NavLinks from './NavLinks'; import MenuButton from './MenuButton'
export default function Header(){const[open,setOpen]=useState(false);return <header id="top"><Logo/><div className={open?'nav open':'nav'}><NavLinks onClick={()=>setOpen(false)}/></div><MenuButton open={open} onClick={()=>setOpen(!open)}/></header>}
