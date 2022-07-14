const menu_data = [
  { title: "Home", link: "/", dropdown: false },
  {
    title: "About Us",
    link: "/About",
    dropdown: true,
    submenu: [
      { title: "Our Committee", link: "/About/Committee" },
      { title: "Contact Us", link: "/About/Contact" },
    ],
  },
  { title: "Members", link: "/Members", dropdown: false },
  { title: "Events", link: "/Events", dropdown: false },
];

export default menu_data;
