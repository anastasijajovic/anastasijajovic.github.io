export default function ProjectTags({tags}){return <div className="tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div>}
