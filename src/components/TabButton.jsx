export default function TabButton({children,isSelected,...props}) {
// document.querySelector('button').addEventListener('click', () => {
//vanilla js de bu şekilde 
// })
  return (
    <li>
      <button className={isSelected ? 'active':undefined} {...props}>{children}
      </button>
    </li>
  );
}
