import React from 'react';

import classes from '../../styles/CategoryListItem.module.scss';

const CategoryListItem = props => {
    return (
        <li className={classes.ListItem}>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Description}>
                {props.description || 'No additional information'}
            </div>
        </li>
    );
};

export default CategoryListItem;
