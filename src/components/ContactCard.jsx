import { profile } from '../data/portfolio';

export default function ContactCard() { return <div className="contact-card"><div className="contact-detail"><span className="contact-label">Piši mi</span><a className="contact-value" href={'mailto:' + profile.email}>{profile.email}</a></div><div className="contact-detail"><span className="contact-label">Pronađi me</span><a className="contact-value" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <b>↗</b></a></div></div> }
