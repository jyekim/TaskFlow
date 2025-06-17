import React from 'react';
import IndexBoardCard from '../components/Index/IndexBoardCard';
import { ListNotice, NoticeRequest } from '../types/notice';
import { Column } from '../types/table';
import { useForm } from 'react-hook-form';

const Index = () => {
    /** 공지사항 전달 데이터 */
    const noticeRequest: NoticeRequest = {
        page: 1, 
        limit: 5, 
        search: null, 
        pageSize: null, 
        order: null, 
        direction: null,
        keyword: null, 
    };
    const noticeParamQuery = useForm<NoticeRequest>({
        defaultValues: noticeRequest
    })
    const noticeItems: ListNotice[] = [];
    const noticeColumns: Column[] = [
        { header: 'no', accessor: 'listNumber' },
        { header: '제목', accessor: 'title' },
        { header: '작성자', accessor: 'writerId' },
        { header: '작성일', accessor: 'createDate' },
        { header: '조회수', accessor: 'view' },
    ]

    
  return (
      <div className='w-full max-w-[1280px] mx-auto'>
          <div className='flex space-x-4'>
              <div className='flex-1 bg-gray-300 p-4'>
                  <IndexBoardCard<NoticeRequest, ListNotice>
                      title='공지사항'
                      api='/notice'
                      paramQuery={noticeParamQuery}
                      resItem={noticeItems}
                      columns={noticeColumns}
                      addLink='/notice' 
                  />
              </div>
              <div className='flex-1 bg-gray-500 p-4'>
                
              </div>
          </div>
          
          <div className='mt-4 bg-gray-700 p-4'>
              커뮤니티 목록!!
          </div>
            
    </div>
  );
};

export default Index;

/**
 * w-full: 너비를 100%로 설정하여 부모 요소에 맞춤
 * max-w-[1280px]: 최대 너비를 1280px로 제한
 * mx-auto: 자동 마진을 적용해 가운데 정렬
 * space-x-4 : 각 항목 간에 간격을 주는 클래스
 * flex-1 : 1번과 2번이 동일한 너비를 가지도록 설정
 * mt-4 : 커뮤니티목록 구역에 상단 여백을 추가하여 공지사항과 익명게시판 사이에 간격을 만듦
 * 
 */