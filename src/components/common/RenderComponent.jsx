function RenderComponent({ className, items, render }) {
  return (
    items && (
      <div className={className}>
        {items.map((item, idx) => {
          return <div key={idx}>{render(item)}</div>;
        })}
      </div>
    )
  );
}

export default RenderComponent;
