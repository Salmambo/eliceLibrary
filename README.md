# [시나리오]
## 도서관 사서가 이용하는 도서 등록 API

<br>

# [과제]
### 다음 URL로 요청하면 주석에서 표현한 행위를 하는 REST API를 만들기
```javascript
/* 책 정보 모두 가져오기 */
GET /api/book HTTP/1.1

/* 책 정보 가져오기 */
GET /api/book/:id HTTP/1.1

/* 책 등록하기 */
POST /api/book HTTP/1.1

/* 책 삭제하기 */
DELETE /api/book/:id HTTP/1.1

/* 책 정보 수정하기 */
PUT /api/book/:id HTTP/1.1
```

<br>

# [특이사항]
### - 주어진 목업 데이터(models/mocks/MOCK_BOOK_DATA.csv)를 DB로 사용