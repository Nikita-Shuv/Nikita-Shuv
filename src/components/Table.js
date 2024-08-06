import React, { useMemo } from 'react';
import { useTable, useSortBy, useResizeColumns, useFlexLayout } from 'react-table';
import ResizableCell from './ResizableCell';
import '../styles/TableStyles.css';

const Table = ({ data, onRowClick }) => {
  const columns = useMemo(() => [
    {
      Header: "Имя",
      accessor: row => `${row.firstName} ${row.lastName} ${row.maidenName}`,
      id: 'fullName',
      width: 200,
      minWidth: 50,
      maxWidth: 400,
    },
    {
      Header: "Возраст",
      accessor: "age",
      width: 100,
      minWidth: 50,
      maxWidth: 200,
    },
    {
      Header: "Пол",
      accessor: "gender",
      width: 100,
      minWidth: 50,
      maxWidth: 200,
    },
    {
      Header: "Номер телефона",
      accessor: "phone",
      width: 150,
      minWidth: 50,
      maxWidth: 300,
    },
    {
      Header: "Адрес",
      accessor: row => `${row.address.address}, ${row.address.city}`,
      id: 'address',
      width: 200,
      minWidth: 50,
      maxWidth: 400,
    }
  ], []);

  const defaultColumn = {
    minWidth: 50,
    width: 150,
    maxWidth: 400,
  };

  // Использование хуков из react-table
  const {
    getTableProps, // Свойства таблицы
    getTableBodyProps, // Свойства тела таблицы
    headerGroups, // Группы заголовков
    rows, // Строки таблицы
    prepareRow, // Подготовка строки для рендеринга
  } = useTable(
    { columns, data, defaultColumn }, // Параметры таблицы
    useFlexLayout, // Хук для гибкого макета
    useResizeColumns, // Хук для изменения размера колонок
    useSortBy // Хук для сортировки
  );


  return (
    <div {...getTableProps()} className="data-table">
      <div className="header-group">
        {headerGroups.map(headerGroup => (
          <div key={headerGroup.id} {...headerGroup.getHeaderGroupProps()} className="header-group">
            {headerGroup.headers.map(column => (
              <div key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} className="header">
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
                <ResizableCell column={column} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className="body">
        {rows.map(row => {
          prepareRow(row);
          return (
            <div
              key={row.id}
              {...row.getRowProps()}
              className="row"
              onClick={() => onRowClick(row.original)}
            >
              {row.cells.map(cell => (
                <div key={cell.column.id} {...cell.getCellProps()} className="cell">
                  {cell.render('Cell')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;