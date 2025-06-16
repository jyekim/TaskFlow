import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
// import Column from "../components/Board/Column";
import IssueCard from "../components/Board/IssueCard";
import { initialData } from "../data/mockBoardData";
import { Project } from "../types/member";
import { BoardData, ColumnType, Issue } from "../types/board";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

const reorder = (
  list: Issue[],
  startIndex: number,
  endIndex: number
): Issue[] => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Board = () => {
  // const [columns, setColumns] = useState(initialData.columns);
  // const [columnOrder] = useState(initialData.columnOrder);

  const [columns, setColumns] = useState<{ [key: string]: ColumnType }>({});
  const [columnOrder, setColumnOrder] = useState<string[]>([]);

  //드래그 종료 후 아이템 이동되었을때 상태 업데이트 함수
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    console.log("source.droppableId가 뭐야", source.droppableId);
    console.log("destination.droppable는 뭐여", destination.droppableId);

    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const newIssues = reorder(column.issues, source.index, destination.index);

      const newColumn = {
        ...column,
        issues: newIssues,
      };

      setColumns({
        ...columns,
        [source.droppableId]: newColumn,
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceIssues = [...sourceColumn.issues];
      const destIssues = [...destColumn.issues];

      const [movedItem] = sourceIssues.splice(source.index, 1);
      destIssues.splice(destination.index, 0, movedItem);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          issues: sourceIssues,
        },
        [destination.droppableId]: {
          ...destColumn,
          issues: destIssues,
        },
      });
    }

    console.log("source", source);
    console.log("destination", destination);
  };


useEffect(() => {
  const fetchTodos = async () => {
    try {
      const res = await axios.get("/todo");
      const data = res.data; // <- 위에서 말한 배열 형태

      console.log("✅ 서버 응답:", data);

      const newColumns: { [key: string]: ColumnType } = {};
      const newColumnOrder: string[] = [];

      data.forEach((section: any) => {
        const { todoStatus, todos } = section;

        newColumns[todoStatus] = {
          id: todoStatus,
          title:
            todoStatus === "READY"
              ? "시작 전"
              : todoStatus === "IN_PROGRESS"
              ? "진행 중"
              : "완료",
          issues: todos,
        };

        newColumnOrder.push(todoStatus);
      });

      setColumns(newColumns);
      setColumnOrder(newColumnOrder);
    } catch (err: any) {
      console.error("❌ 에러 발생!", err);
    }
  };

  fetchTodos();
}, []);




  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-around gap-6 p-8 bg-blue-50 min-h-screen">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          return (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white w-64 rounded shadow"
                >
                  <h2 className="text-lg font-semibold p-4 text-center">
                    {column.title}
                  </h2>
                  <hr />
                  <div className="flex flex-col px-4 py-2 space-y-2">
                    {column.issues.map((issue, index) => (
                      <Draggable
                        key={issue.id}
                        draggableId={issue.id}
                        index={index}
                      >
                        {(provided) => (
                          <IssueCard issue={issue} provided={provided} />
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
