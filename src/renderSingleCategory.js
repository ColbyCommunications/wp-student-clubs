import React from 'react';
import ReactDOM from 'react-dom';
import drawPost from './components/drawPost';

import styles from './components/colby-student-clubs.module.scss';

const renderSingleCategory = (container, items) => {
  ReactDOM.render(
    <div className={styles.cardContainer}>
      {items.map(item =>
        drawPost({
          title: item.title,
          content: item.content,
          id: item.id,
          meta: item.meta,
          style: 'card',
        }))}
    </div>,
    container,
  );
};

export default renderSingleCategory;
