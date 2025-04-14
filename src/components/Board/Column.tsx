
type ColumnProps = {
    title: string;
    issues: string[];
  };
  

  const Column = ({ title, issues }: ColumnProps) => {
    return (
      <div className="bg-white w-64 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="flex space-y-2">
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