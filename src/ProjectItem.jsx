function ProjectItem(props) {
  const stackArray = props.stack;
  const stackList = stackArray.map((element) => <span>{element}</span>);

  return (
    <div className="projekt">
      <h3>{props.name}</h3>
      <img width="100%" src={props.img} />
      <p>{stackList}</p>
      <div class="links">
        <a target="_blank" href={props.linkOpen}>
          Open
        </a>
        <a className="github" href={props.linkGH}>
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
