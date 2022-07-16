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
  {
    title: "Shop",
    link: "/Shop",
    dropdown: true,
    submenu: [
      { title: "Limited Sale!", link: "/Shop/Sale" },
      { title: "QCB Merch", link: "/Shop/Merch" },
      { title: "Camping Essentials", link: "/Shop/Camping" },
    ],
  },
];

export default menu_data;
