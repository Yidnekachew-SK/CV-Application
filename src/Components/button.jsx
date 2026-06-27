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

export default Button;