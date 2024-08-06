import React from 'react';
import '../styles/ResizableCellStyles.css'

const ResizableCell = ({ column }) => (
  <div
    {...column.getResizerProps()} // Получает свойства для ресайзера от react-table
    className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
    onClick={(e) => e.stopPropagation()} // Останавливает распространение события клика
  />
);

export default ResizableCell;