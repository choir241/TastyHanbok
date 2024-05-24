export default function Navigation(){
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "Menu", link: "/Menu" },
    { text: "Reservation", link: "/Reservation" },
    { text: "Pages", link: "/Pages" },
    { text: "Contact", link: "/Contact" },
  ];

  return (
    <nav>
      {navLinks.map((ele: any) => {
        return <a href={ele.link}>{ele.text}</a>;
      })}
    </nav>
  );
};
