
type ColumnProps = {
    title: string;
    issues: string[];
  };
  

  const Column = ({ title, issues }: ColumnProps) => {
    return (
      <div className="bg-white w-64 rounded shadow">
        <h2 className="text-lg font-semibold p-4 text-center">{title}</h2>
        <hr></hr>
        <div className="flex flex-col px-4 py-2 space-y-2">
          {issues.map((issue, index) => (
            <div key={index} className="border p-2 rounded shadow-sm">
              {issue}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default Column;