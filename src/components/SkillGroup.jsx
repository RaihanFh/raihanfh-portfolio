function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group-title">{group.group}</h3>
      <div className="tech-tags">
        {group.items.map((item, index) => (
          <span key={index} className="tech-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
