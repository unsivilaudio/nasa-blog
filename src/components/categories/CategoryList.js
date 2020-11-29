import React from 'react';

import CategoryListItem from './CategoryListItems';

const CategoryList = props => {
    const renderListItems = () => {
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
        <div className='Container'>
            <h1>Newest Article List</h1>
            <ul>{props.items && renderListItems()}</ul>
        </div>
    );
};

export default CategoryList;
