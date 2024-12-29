export default function TabButton({ label,isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>{label}</button>
    </li>
  );
}
