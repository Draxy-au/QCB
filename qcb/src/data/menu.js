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
    link: "/Members",
    dropdown: true,
    submenu: [
      { title: "Member Benefits", link: "/Members" },

      { title: "Member Portal", link: "/Members/Portal" },
    ],
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
