function NavbarItem(props) {
  return (
    <li>
      <a
        href={props.href}
        className="block px-4 py-3 text-white text-center text-lg hover:bg-accent-orange transition-colors"
      >
        {props.title}
      </a>
    </li>
  );
}

export default NavbarItem;