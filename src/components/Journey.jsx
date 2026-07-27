import {timeline} from '../data/portfolio'; import SectionTitle from './SectionTitle'; import TimelineItem from './TimelineItem';
export default function Journey(){return <section id="journey" className="section journey"><SectionTitle eyebrow="04 / Moj put" title="U pokretu, stalno."/><div className="timeline">{timeline.map(item=><TimelineItem item={item} key={item.title}/>)}</div></section>}
