import Column from "../components/Board/Column";
const Board = () => {
  return (
    <>
      <div className="flex justify-around gap-6 p-8 bg-blue-50 min-h-screen">
        <Column title="Idea" issues={["새 프로젝트 기획", "이슈이슈", "계회이 자꾸 생기면? 그때 어떻게 할거야?"]} />
        <Column title="To Do " issues={["로그인 구현"]} />
        <Column title="In Progress" issues={["보드 UI 작업"]} />
        <Column title="Done✅ " issues={["프로젝트 세팅"]} />
      </div>
    </>
  );
};

export default Board;
