import { useEffect } from "react";
import axios from "../api/axiosInstance";
import Column from "../components/Board/Column";
import { initialData } from "../data/mockBoardData";
import {  Project } from "../types/member";
import { BoardData, ColumnType, Issue } from "../types/board";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Board = () => {
  useEffect(() => {
    axios
      .get("https://5fe7-58-228-2-217.ngrok-free.app/api/project")
      .then((res: unknown) => {
        const response = res as { data: Project[] }; 
        console.log(response.data);
      })
      .catch((err: unknown) => {
        const error = err as Error;
        console.error("❌❌❌❌❌❌에러 발생:", error.message);
      });
  }, []);

  return (
    <>
      <div className="flex justify-around gap-6 p-8 bg-blue-50 min-h-screen">
      {initialData.columnOrder.map((columnId) => {
        const column = initialData.columns[columnId]; 
        return (
          <Column 
            key={column.id} 
            title={column.title} 
            issues={column.issues}
          />
        );
      })}
      </div>
    </>
  );
};

export default Board;
