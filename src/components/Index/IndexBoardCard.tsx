import React, { useEffect, useState } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { Column } from '../../types/table';
import { Link } from 'react-router-dom';
import IndexBoardTable from './IndexBoardTable';
import axios from "../../api/axiosInstance";

interface IndexBoardCardProps<Req extends FieldValues, Res> {
    title: string;
    api: string;
    paramQuery: UseFormReturn<Req>;
    resItem: Res[];
    columns: Column[];
    addLink: string;
}

const IndexBoardCard = <Req extends FieldValues , Res>({
    title,
    api,
    paramQuery,
    resItem,
    columns,
    addLink
}: IndexBoardCardProps<Req, Res>) => {


    const [data, setData] = useState<Res[]>(resItem);

    useEffect(() => {
        const fetchData = async () => {
            
            if (title === '공지사항') {
                try {
                    const params = paramQuery.getValues();
                    const res = await axios.get(api, { params });
                    console.log('호출 공지사항 > ', res.data.content);
                    setData(res.data.content);
                } catch (err) {
                    console.error('axios 호출 실패', err)
                }
            }
            else if (title === '익명게시판') {
                try {
                    const params = paramQuery.getValues();
                    const res = await axios.get(api, { params });
                    console.log('호출 익명게시판 > ', res.data.list);
                    setData(res.data.list);
                } catch (err) {
                    console.error('axios 호출 실패', err)
                }
            }

        
        };
        fetchData();
    }, [api, paramQuery]);


  return (
    <div>
          <h3>{title}</h3> <p><Link to={addLink}> 더보기 </Link></p>

          <IndexBoardTable columns={columns} data={data}></IndexBoardTable>
          
  
    </div>
  );
};

export default IndexBoardCard;