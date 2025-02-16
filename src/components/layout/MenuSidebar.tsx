'use client';

import { getRouter } from '@/src/utils/router.util';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
const drawerWidth = 240;

const menuItems = [
  { text: 'Trang chủ', icon: <HomeIcon />, href: getRouter('home') },
  { text: 'Nhập hàng', icon: <PlaylistAddCircleIcon />, href: getRouter('goodsReceipt') },
  { text: 'Bán hàng', icon: <LocalMallIcon />, href: getRouter('goodsShipping') },
  { text: 'Thu/Chi', icon: <AccountBalanceWalletIcon />, href: getRouter('revenueExpense') },
  { text: 'Báo cáo', icon: <AssessmentIcon />, href: getRouter('report') },
];

const MenuSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const checkActive = (href: string) => {
    if (href === getRouter('home')) {
      return pathname === getRouter('home');
    }
    return pathname.includes(href);
  };
  return (
    <div className=''>
      <div className='max-md:hidden'>
        <Drawer
          variant='permanent'
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar>
            <Typography variant='h6' noWrap>
              Logo
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={checkActive(item.href)}
                    sx={{
                      '&.Mui-selected .MuiListItemText-root .MuiTypography-root': {
                        color: '#f7422d',
                      },
                      '&.Mui-selected .MuiListItemIcon-root': {
                        color: 'red',
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </div>
      <div className='md:hidden'>
        <Box
          sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            borderTop: '1px solid #ccc',
            backgroundColor: '#fff',
          }}
        >
          <BottomNavigation
            showLabels
            sx={{
              '& .MuiBottomNavigationAction-label': {
                fontSize: '12px',
                whiteSpace: 'nowrap',
              },
            }}
          >
            {menuItems.map((item, index) => (
              <BottomNavigationAction
                key={index}
                label={item.text}
                icon={item.icon}
                onClick={() => router.push(item.href)}
                className={checkActive(item.href) ? 'text-[#f7422d]' : ''}
              />
            ))}
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
};

export default MenuSidebar;
