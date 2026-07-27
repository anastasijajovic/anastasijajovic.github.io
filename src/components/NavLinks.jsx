const links=[['O meni','about'],['Veštine','skills'],['Projekti','projects'],['Put','journey'],['Kontakt','contact']]
export default function NavLinks({onClick}){return <nav>{links.map(([label,id])=><a onClick={onClick} href={'#'+id} key={id}>{label}</a>)}</nav>}
