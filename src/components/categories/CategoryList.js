import React from 'react';

import CategoryListItem from './CategoryListItems';
import classes from '../../styles/CategoryList.module.scss';

const CategoryList = props => {
    const renderListItems = () => {
        if (props.items.length === 0) return <h1>No data to display</h1>;
        return props.items.map(el => {
            return (
                <CategoryListItem
                    key={el.id}
                    title={el.title}
                    description={el.description}
                />
            );
        });
    };

    return (
        <div className={classes.CategoryList}>
            <h1 className={classes.Header}>Newest Article List</h1>
            <ul className={classes.List}>{renderListItems()}</ul>
        </div>
    );
};

export default CategoryList;
