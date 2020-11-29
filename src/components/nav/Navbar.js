import React, { useEffect, useState } from 'react';

import axios from '../../api/nasa';
import classes from '../../styles/Navbar.module.scss';

const Navbar = props => {
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('/categories');
        setCategories(response.data.categories);
    };

    const renderCategoryList = () => {
        return categories.map(cat => {
            return (
                <option key={cat.id} value={cat.id}>
                    {cat.title}
                </option>
            );
        });
    };

    const handleSelect = e => {
        props.changeCat(e.target.value);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <nav className={classes.Navbar}>
            <div className={classes.Brand}>
                Nasa <span>News</span>
            </div>
            <ul className={classes.NavList}>
                <div className={classes.Text}>Category: </div>
                <select
                    name='category'
                    onChange={handleSelect}
                    value={props.category}>
                    {renderCategoryList()}
                </select>
            </ul>
        </nav>
    );
};

export default Navbar;
