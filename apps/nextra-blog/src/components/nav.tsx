import { Navbar } from'@fpkit/nextjs';
import React from 'react';

export default function Nav() {
  const navList = [
    {
      url: '/home',
      name: 'Home',
    },
    {
      url: '/about',
      name: 'About',
    },
    {
      url: '/contact',
      name: 'Contact',
    },
  ];
  return <Navbar navList={navList} />;
}