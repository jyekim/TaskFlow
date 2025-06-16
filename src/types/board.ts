export interface Issue {
  id: number;
  title: string;
  todoStatus: "READY" | "IN_PROGRESS" | "DONE";
  sort: number;
}

export interface ColumnType {
  id: string;
  title: string;
  issues: Issue[];
}

// export interface IssueType {
//   id: string;
//   title: string;
//   description: string;
// }

// export interface ColumnProps {
//   title: string;
//   issues: Issue[];
// }

// export interface BoardData {
//   columns: {
//     [key: string]: ColumnType;
//   };
//   columnOrder: string[];
// }
