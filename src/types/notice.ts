export interface NoticeRequest {
    search?: string | null; // 검색 조건 (전체, 작성자 식별키, 제목 등)
    page?: string | null| number; // 페이징 처리 시 페이지 번호
    limit?: string | null | number; // 한 페이지에 보여 줄 게시글 갯수
    pageSize?: string | null| number; // 하단 바의 갯수
    order?: string | null; // 정렬 기준
    direction?: string | null; // 정렬 방법 (내림 desc, 오름 asc)
    keyword?: string | null; // 검색 키워드
}

export interface ListNotice {
    id?: string| null;
    title?: string| null;
    createDate?: string| null;
    writerId?: string| null;
    fileCount?: number | null;
    view?: number| null;
    listNumber?: number| null;
    totalElements?: number| null;  // 총 갯수
    totalPages?: number| null;
    first?: boolean| null;
    last?: boolean | null;
}


/**
    " ?: " -> ?를 사용하여 해당 필드가 선택적임을 의미.
 */