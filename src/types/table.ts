export interface Column {
    header: string;  // 테이블 헤더 (컬럼명)
    accessor: string;  // 데이터 객체의 속성명
}
export interface IndexTableProps <Res> {
    columns: Column[];  // 테이블의 컬럼 정의
    data: Res[]; // 테이블 데이터 (배열 형태로 전달)
}