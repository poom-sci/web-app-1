import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>หน้าแรก</NavigationItem>
        <NavigationItem link="/">สินค้า</NavigationItem>
        <NavigationItem link="/">เกี่ยวกับ</NavigationItem>
        <NavigationItem link="/">ติดต่อเรา</NavigationItem>
    </ul>
);

export default navigationItems;