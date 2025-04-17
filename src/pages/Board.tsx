import Column from "../components/Board/Column";
const Board = () => {
  return (
    <>
      <div className="flex gap-6 p-8 bg-blue-50 min-h-screen">
        <Column title="To Do " issues={["로그인 구현"]} />
        <Column title="In Progress" issues={["보드 UI 작업"]} />
        <Column title="Done " issues={["프로젝트 세팅"]} />
      </div>
    </>
  );
};

export default Board;
