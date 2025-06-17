import React from 'react';
import { Column, IndexTableProps } from '../../types/table';

const IndexBoardTable = <Res,>({ columns, data }: IndexTableProps<Res>) => {
  console.log('테이블 컴포넌트 실행')
  return (
    <div>
      <table>
        
        <thead>
          <tr>
            {columns.map((col: Column) => (
              <th key={col.accessor}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, rowIdx) => (
            <tr key={rowIdx}>
              {columns.map((col: Column) => (
                <td key = {col.accessor}>{String(item[col.accessor as keyof Res]) }</td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default IndexBoardTable;