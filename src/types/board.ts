export interface Issue {
  id: string;
  content: string;
}

export interface ColumnType {
  id: string;
  title: string;
  issues: Issue[];
}

export interface BoardData {
  columns: {
    [key: string]: ColumnType;
  };
  columnOrder: string[];
}
