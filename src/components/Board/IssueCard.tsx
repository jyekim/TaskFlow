
type Issue = {
    id: string;
    title: string;
    description: string;
  };
  
  const IssueCard = ({ issue }: { issue: Issue }) => {
    return (
      <div className="bg-gray-100 p-3 rounded shadow-sm hover:bg-gray-200 cursor-pointer">
        <h3 className="font-medium">{issue.title}</h3>
        <p className="text-sm text-gray-600">{issue.description}</p>
      </div>
    );
  };
  
  export default IssueCard;
  