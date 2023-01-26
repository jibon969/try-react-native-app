import * as React from 'react'
import {FontAwesome} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',
    ContactStack: 'ContactStack',
    Contact: 'Contact',

    UserProfileStack: 'UserProfileStack',
    UserProfile: 'UserProfile',

    PersonalInfoStack: 'PersonalInfoStack',
    PersonalInfo: 'PersonalInfo',

    SettingStack: 'SettingStack',
    Setting: 'Setting',

    ProductListStack: 'ProductListStack',
    ProductList: 'ProductList',


};

export const routes = [

    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title: 'Home',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="home" size={focused ? 20 : 20} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <FontAwesome name="home" size={focused ? 20 : 20} color={focused ? '#551E18' : '#000'}/>,
    },
    {
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title: 'Home',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <FontAwesome name="home" size={focused ? 20 : 20} color={focused ? '#551E18' : '#000'}/>,
    },

    // ContactStack =============================================================
    {
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="phone" size={focused ? 20 : 20} color={focused ? '#551E18' : '#000'}/>
    },
    {
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title: 'Contact Us',
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'}/>,
    },

    // UserProfileStack ===========================================================
    {
        name: screens.UserProfileStack,
        focusedRoute: screens.UserProfile,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },
    {
        name: screens.UserProfile,
        focusedRoute: screens.UserProfileStack,
        title: 'User Profile',
        showInTab: false,
        showInDrawer: false,
    },

    // UserProfileStack ===========================================================
    {
        name: screens.PersonalInfoStack,
        focusedRoute: screens.PersonalInfo,
        title: 'PersonalInfo',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.PersonalInfo,
        focusedRoute: screens.PersonalInfoStack,
        title: 'PersonalInfo',
        showInTab: false,
        showInDrawer: false,
    },

    // SettingStack ===========================================================
    {
        name: screens.SettingStack,
        focusedRoute: screens.Setting,
        title: 'Setting',
        showInTab: false,
        showInDrawer: true,
    },
    {
        name: screens.Setting,
        focusedRoute: screens.SettingStack,
        title: 'Setting',
        showInTab: false,
        showInDrawer: false,
    },

    // ProductListStack ===========================================================
    {
        name: screens.ProductListStack,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? '#551E18' : '#000'}/>
    },
    {
        name: screens.ProductList,
        focusedRoute: screens.ProductListStack,
        title: 'ProductList',
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <MaterialIcons name="grid-on" size={focused ? 20 : 20} color={focused ? '#551E18' : '#000'}/>
    },
];