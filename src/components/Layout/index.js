import React from 'react';
import Header from '../Header/index';
import classes from './Layout.module.scss';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={classes.container}>{children}</div>
        </>
    )
}
