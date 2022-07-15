const menu_data = [
  { title: "Home", link: "/", dropdown: false },
  {
    title: "About Us",
    link: "/About",
    dropdown: true,
    submenu: [
      { title: "Our Committee", link: "/About/OurCommittee" },
      { title: "Contact Info", link: "/About/ContactInfo" },
    ],
  },
  {
    title: "Members",
    link: "/Members",
    dropdown: true,
    submenu: [
      { title: "Member Benefits", link: "/Members" },
      { title: "Contact QCB", link: "/Members/ContactQCB" },
    ],
  },
  { title: "Events", link: "/Events", dropdown: false },
];

export default menu_data;
