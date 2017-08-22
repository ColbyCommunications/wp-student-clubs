import React from 'react';
import ReactDOM from 'react-dom';
import drawPost from './components/drawPost';

const renderSingleCategory = (container, items) => {
  ReactDOM.render(
    <div>
      {items.map((item) =>
        drawPost({
          title: item.title,
          content: item.content,
          id: item.id,
          meta: item.meta,
        })
      )}
    </div>,
    container
  );
};

export default renderSingleCategory;
