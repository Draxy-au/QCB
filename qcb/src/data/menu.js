const menu_data = [
  { title: "Home", link: "/", dropdown: false },
  {
    title: "About Us",
    link: "/About",
    dropdown: true,
    submenu: [
      { title: "Our Committee", link: "/About/OurCommittee" },
      { title: "Contact Us", link: "/About/ContactInfo" },
    ],
  },
  {
    title: "Members",
    link: "/Members/Portal/Dashboard",
    dropdown: true,
    submenu: [{ title: "Member Benefits", link: "/Members/Benefits" }],
  },
  {
    title: "Events",
    link: "/Events",
    dropdown: true,
    submenu: [
      { title: "Camping Essentials", link: "/Events/CampingEssentials" },
    ],
  },
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
