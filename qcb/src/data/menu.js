const menu_data = [
  { title: 'Home', link: '/', dropdown: false },
  {
    title: 'About Us',
    link: '/About',
    dropdown: true,
    submenu: [
      { title: 'Our Committee', link: '/About/OurCommittee' },
      { title: 'Contact Us', link: '/About/ContactInfo' },
    ],
  },
  {
    title: 'Members',
    link: '/Members/Portal/Dashboard',
    dropdown: true,
    submenu: [{ title: 'Member Benefits', link: '/Members/Benefits' }],
  },
  {
    title: 'Events',
    link: '/Events',
    dropdown: true,
    submenu: [
      { title: 'Camping Essentials', link: '/Events/CampingEssentials' },
    ],
  },
  {
    title: 'Shop',
    link: 'https://qldcampingbears.myshopify.com/',
    dropdown: true,
    submenu: [
      { title: 'QCB Merch', link: 'https://qldcampingbears.myshopify.com/' },
    ],
  },
]

export default menu_data
