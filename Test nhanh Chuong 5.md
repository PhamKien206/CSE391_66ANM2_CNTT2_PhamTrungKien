```md
# PHIẾU ÔN TẬP – KIỂM TRA KIẾN THỨC CẦN ĐẠT  
## Chương 5: Những kiến thức nền tảng về JavaScript (5.1 → 5.4)

**Họ và tên:** Phạm Trung Kiên
**Mã sinh viên:** 2451271131  
**Lớp:** 66ANM2  
**Thời gian làm:** 180 phút  
**Hình thức:** Cá nhân  
**Yêu cầu:** Trả lời ngắn gọn, đúng ý; với câu code hãy viết đúng cú pháp.

---

## A. Mục tiêu kiến thức cần đạt

Sau khi hoàn thành Chương 5, sinh viên cần:

- Mô tả được JavaScript là gì, chạy ở đâu, vai trò trong web (HTML/CSS/JS). [web:37]  
- Hiểu cú pháp cơ bản, khai báo biến `var/let/const`, kiểu dữ liệu thường gặp, toán tử, ép kiểu cơ bản. [web:57][web:58][web:42]  
- Viết được câu lệnh điều kiện, vòng lặp; định nghĩa và gọi hàm, nắm được tham số/giá trị trả về. [web:47][web:63]  
- Nhận biết khái niệm OOP trong JS: object, property, method; hiểu class ở mức cơ bản và cơ chế prototype ở mức nhận biết. [web:48][web:61]

---

## B. PHẦN 5.1 – GIỚI THIỆU VỀ JAVASCRIPT

### B1. Câu hỏi ngắn
1) JavaScript là gì? (Viết 1–2 câu) [web:37]  
- JavaScript là một ngôn ngữ lập trình kịch bản (scripting language), được sử dụng chủ yếu để tạo ra các trang web có tính tương tác và nội dung động

2) JavaScript có thể chạy ở đâu? Nêu ít nhất 2 môi trường. [web:37]  
- Trình duyệt Web( chrome, Firebox , Safari) 
- Máy chủ (server-side): thông qua môi trường Node.Js

3) Phân biệt vai trò của HTML – CSS – JavaScript trong trang web (mỗi cái 1 ý). [web:37]  
- HTML: Xây dựng cấu trúc nội dung trang web  
- CSS: Định dạng , trang trí giao diện và bố cục 
- JavaScript: Xử lý logic, tạo các hành vi tương tác và cập nhật nội dung động cho trang web

### B2. Đúng/Sai (ghi Đ hoặc S)
4) JavaScript chỉ chạy được trong trình duyệt. S [web:37]  
5) JavaScript dùng để xử lý tương tác và hành vi của trang web. Đ [web:37]

---

## C. PHẦN 5.2 – CÚ PHÁP JAVASCRIPT & CÁC KIỂU DỮ LIỆU

### C1. Khai báo biến: var/let/const
6) Điền vào chỗ trống:  
- `let` có phạm vi (scope) theo block (function/block). [web:57]  
- `var` có phạm vi (scope) theo function (function/block). [web:57]  
- `const` không (có/không) cho phép gán lại (reassign) biến. [web:57]

7) Cho đoạn code, hãy dự đoán và giải thích ngắn:

```js
const arr =;
arr.push(4);
arr =;[^1]
```

- Dòng nào chạy được? Dòng nào lỗi? Vì sao? [web:57]
  - Dòng arr.push(4); chạy được, vì const đối với Array/Object vẫn cho phép thay đổi nội dung (mutate) bên trong
  - Dòng arr =;[^1] bị lỗi (TypeError), vì từ khóa const không cho phép gán lại (reassign) biến thành một giá trị/vùng nhớ hoàn toàn mới


### C2. Kiểu dữ liệu (Data Types)

8) JavaScript có các kiểu dữ liệu cơ bản (primitive) và kiểu Object. Hãy liệt kê ít nhất 5 kiểu dữ liệu. [web:58][web:42]

- String (Chuỗi)
- Number (Số)
- Boolean (Đúng/Sai)
- Undefined (Chưa xác định)
- Null (Rỗng)

9) Cho các biểu thức sau, hãy ghi kết quả của `typeof`:
```js
typeof 10
typeof "10"
typeof true
typeof null
typeof { a: 1 }
```

- Kết quả: "number", "string", "boolean", "object", "object" [web:58][web:42]

> Gợi ý: Có một “điểm đặc biệt” với `null`. Em ghi chú lại nếu thấy khác thường. [web:42] **
>(Ghi chú: typeof null trả về "object" là một lỗi lịch sử (bug) của JavaScript từ những phiên bản đầu tiên và được giữ lại để đảm bảo tính tương thích ngược)

### C3. Toán tử \& ép kiểu cơ bản

10) Dự đoán kết quả:
```js
"5" + 1
"5" - 1
```

- Kết quả: "51" (Toán tử + sẽ ép số 1 thành chuỗi và nối lại) và 4 (Toán tử - sẽ tự động ép chuỗi "5" thành số để thực hiện phép trừ) [web:42]

11) Giải thích ngắn sự khác nhau giữa `==` và `===` (1–2 câu).
  -  == (so sánh lỏng lẻo) sẽ tự động ép kiểu dữ liệu của 2 vế cho giống nhau rồi mới so sánh giá trị; trong khi === (so sánh nghiêm ngặt) sẽ so sánh cả giá trị và kiểu dữ liệu, nếu khác kiểu sẽ trả về false ngay lập tức.


## D. PHẦN 5.3 – CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### D1. Điều kiện if/else

12) Viết đoạn code: nếu `score >= 5` in `"Pass"`, ngược lại in `"Fail"`. [web:47][web:63]
```js

if (score >= 5) {
  console.log("Pass");
} else {
  console.log("Fail");
}


13) Câu hỏi: Trong chuỗi `if ... else if ... else`, khi một điều kiện đúng thì các nhánh còn lại có được kiểm tra nữa không? Giải thích ngắn. [web:65]
  - Không. Khi JS chạy từ trên xuống và gặp một điều kiện đúng, nó sẽ thực thi khối lệnh của điều kiện đó rồi lập tức thoát khỏi toàn bộ chuỗi cấu trúc if...else, các nhánh phía sau sẽ bị bỏ qua
''
### D2. Vòng lặp

14) Viết vòng lặp `for` in ra các số từ 1 đến 5. [web:47]
''js

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

15) Viết vòng lặp `while` để cộng dồn tổng từ 1 đến n (n cho trước). [web:47]
```js
// Input:
let n = 5;
let sum = 0;
let i = 1;

// TODO:
While(i <=n){
  sum +=1;
  i++;
}
console.log(sum);
```



### D3. Hàm (function)

16) Hoàn thiện hàm `sum(a, b)` trả về tổng 2 số: [web:47]
```js
function sum(a, b) {
  // TODO:
  return a+b;
}
```

17) Phân biệt:

- **Parameter (tham số)** là gì?
  - Là biến được khai báo ở phần định nghĩa của hàm để nhận dữ liệu. (VD: a và b trong function sum(a, b))
- **Argument (đối số)** là gì?
  - Là giá trị thực tế truyền vào cho hàm khi tiến hành gọi hàm. (VD: 3 và 5 trong sum(3, 5))


18) Viết hàm `isEven(n)` trả về `true` nếu n chẵn, `false` nếu n lẻ.
```js
// TODO:
function isEven(n){
  return n %2==0;
}
```


---

## E. PHẦN 5.4 – LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP) VỚI JAVASCRIPT

### E1. Object cơ bản

19) Tạo một object `student` có các property: `name`, `id`, `gpa` và method `introduce()` in ra câu giới thiệu. [web:61]
```js
// TODO:
const student = {
  name: "Pham Trung Kien",
  id:"1245",
  gpa: 3.0,
  introduce: function(){
    console.log("Xin chao, toi la "+this.name+" ma so: "+this.id+" gpa:" + this.gpa);
  }
};

```

20) Cho object:
```js
const student = {
  name: "An",
  gpa: 3.2
};
```

- Truy cập `name` theo 2 cách khác nhau (dot notation và bracket notation). [web:61]

```js
// Cách 1:
  console.log(student.name);
// Cách 2:
console.log(student["name"]);
```


### E2. Class (mức cơ bản)

21) Hoàn thiện class `Person` có:

- constructor nhận `name`, `age`
- method `greet()` in `"Hello, I'm <name>"` [web:61]

```js
class Person {
  // TODO:
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}


const p1 = new Person("Linh", 20);
p1.greet();
```

22) (Câu hỏi) `constructor` trong class dùng để làm gì? (1 câu) [web:61]
- constructor là một phương thức đặc biệt trong Class dùng để khởi tạo và gán giá trị ban đầu cho các thuộc tính của đối tượng mới ngay khi đối tượng đó được tạo ra (thông qua từ khóa new).

### E3. Prototype (mức nhận biết)

23) Prototype trong JavaScript liên quan đến cơ chế “kế thừa/tra cứu thuộc tính” giữa các object. Em hãy mô tả prototype bằng lời của em (2–3 câu). [web:48]
- Prototype có thể coi như một "khuôn mẫu" (hoặc đối tượng cha) của một đối tượng. Nếu ta cố gắng truy cập một thuộc tính hay phương thức không tồn tại trong đối tượng hiện tại, JavaScript sẽ tự động tìm kiếm ngược lên đối tượng Prototype của nó (gọi là chuỗi prototype - prototype chain) cho đến khi tìm thấy hoặc đến null
24) Quan sát đoạn ví dụ (không cần thuộc lòng):
```js
const personPrototype = {
  greet() { console.log("hello!"); }
};

const carl = Object.create(personPrototype);
carl.greet();
```

- `Object.create(personPrototype)` làm gì? (1 câu) [web:48]
  - Câu lệnh này tạo ra một đối tượng mới tên là carl, đồng thời gắn trực tiếp personPrototype làm Prototype của carl để carl có thể sử dụng ké hàm greet()

---

## F. TỰ ĐÁNH GIÁ (Self-Reflection)

1) Em tự chấm mức hiểu của mình (khoanh tròn):

- 5.1 Giới thiệu JS:  Chưa hiểu / --Tạm ổn / Khá rõ
- 5.2 Cú pháp \& kiểu DL: Chưa hiểu / --Tạm ổn / Khá rõ
- 5.3 Điều khiển \& hàm: Chưa hiểu / Tạm ổn / Khá rõ
- 5.4 OOP JS: --Chưa hiểu / Tạm ổn / Khá rõ

2) Ba điều em còn chưa chắc hoặc muốn hỏi thêm:
1. .................................................................................
2. .................................................................................
3. .................................................................................

---


