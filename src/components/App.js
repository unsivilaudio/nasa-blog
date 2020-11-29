import React, { useEffect, useState } from 'react';

import axios from '../api/nasa';
import Navbar from './nav/Navbar';
import CategoryList from './categories/CategoryList';
import classes from '../styles/App.module.scss';

const App = props => {
    const [selectedCat, setSelectedCat] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (selectedCat !== '') {
            const getListItems = async id => {
                const url = `/categories/${id}?limit=10`;
                const fetched = await axios.get(url);
                setItems(fetched.data.events);
            };
            getListItems(selectedCat);
        }
    }, [selectedCat]);

    let content = (
        <main className={classes.App}>
            <div className={classes.Hero}>
                <header className={classes.Header}>
                    A simple Nasa api demo
                </header>
                <p className={classes.Text}>Pick a category to get started</p>
            </div>
        </main>
    );

    if (selectedCat !== '') {
        content = <CategoryList items={items} />;
    }

    return (
        <>
            <Navbar category={selectedCat} changeCat={setSelectedCat} />
            {content}
        </>
    );
};

export default App;
