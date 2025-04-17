import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full h-16 bg-blue-600 flex items-center px-6 text-white">
      <div className="flex items-center space-x-5">
      <h1 className="text-xl font-bold">TaskFlow</h1>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">
          내작업
        </Link>
        <Link to="/board" className="hover:underline">
          프로젝트
        </Link>
      </nav>
      </div>

      {/* 오른쪽 정렬 */}
      <div className="flex items-center space-x-4">
        <div className="border rounded px-3 py-1 bg-white text-black">
          🔍 검색창
        </div>
        <p>🔔</p>
        <p>👤</p>
      </div>
    </header>
  );
};

export default Header;
