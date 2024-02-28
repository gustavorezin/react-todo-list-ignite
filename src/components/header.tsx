import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex items-center justify-center bg-gray-700 h-52">
      <img src={logo} alt="logo" />
    </header>
  );
}
