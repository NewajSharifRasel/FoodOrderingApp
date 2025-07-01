export default function Button({ children, textOnly, className = "", ...props }) {
  const cssClass = `${textOnly ? "text-button" : "button"} ${className}`.trim();

  return <button className={cssClass} {...props}>{children}</button>;
}
