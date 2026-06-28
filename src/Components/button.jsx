function Button({ type = "button", name, className, onClick=null }) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

function IncreaseId (id) {
  return id + 1;
}

export { Button, IncreaseId };