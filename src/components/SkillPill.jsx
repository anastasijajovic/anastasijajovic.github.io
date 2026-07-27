export default function SkillPill({name,index}){return <span className="skill-pill"><i>{String(index+1).padStart(2,'0')}</i>{name}</span>}
