/**
 * 영화진흥위원회 API 키를 바탕으로 영화배급사 정보를 불러오는 함수
 * @returns
 */
async function getCompanyList(): void {
  const API_KEY = import.meta.env.VITE_API_KOBIS_KEY;
  const response = await fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json?key=${API_KEY}&companyPartCd=260102&itemPerPage=100`,
  );

  if (response.ok) {
    console.log('response 응답 완료');
  } else {
    console.error('response 응답 에러: ', response.statusText);
  }

  const DATA = await response.json();
  const COMPANY_LIST_RESULT = DATA.companyListResult.companyList;
  console.log(COMPANY_LIST_RESULT);
}

document.addEventListener('DOMContentLoaded', () => {
  getCompanyList();
});

export default getCompanyList;
