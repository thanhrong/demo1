# Website giới thiệu cá nhân

Website React + Vite bằng tiếng Việt, responsive cho máy tính và điện thoại. Bao gồm giới thiệu, kỹ năng, lọc dự án và liên kết email/GitHub. Các thông tin và dự án hiện là nội dung mẫu.

## Cài đặt và chạy

Yêu cầu Node.js 20.19+ hoặc 22.12+ (đã kiểm tra với Node.js 24) và npm.

```bash
cd /workspace/demo1 # hoặc thư mục bạn đã clone dự án
npm ci
npm run dev
```

Mở địa chỉ mà Vite in ra trong terminal (mặc định cổng 5173). Trong môi trường cloud, cần cơ chế chuyển tiếp cổng của nền tảng để truy cập từ máy của bạn. Lệnh dev lắng nghe trên mọi giao diện mạng.

## Kiểm tra

```bash
npm test
npm run build
npm run preview
```

`npm test` chạy hai bài kiểm tra: nội dung/liên kết liên hệ và lọc dự án. `npm run build` tạo bản production trong `dist/`. `npm run preview` phục vụ bản build trên cổng mặc định 4173 để kiểm tra; không phải máy chủ production.

Kiểm tra thủ công: mở trang trên màn hình rộng và điện thoại; thử các liên kết điều hướng, cả ba bộ lọc, liên kết email và GitHub. Dùng phím Tab để kiểm tra điều hướng bàn phím. Email mẫu cần thay trước khi sử dụng thực tế.

## Cá nhân hóa

- `src/App.jsx`: thay đối tượng `profile` (tên, nghề nghiệp, vị trí, email, GitHub), nội dung giới thiệu và danh sách `projects`.
- `src/styles.css`: thay màu sắc, font và bố cục. Google Fonts là tùy chọn; khi không có mạng trang dùng font sans-serif hệ thống.
- `index.html`: thay tiêu đề và mô tả SEO.

Các minh họa được tạo bằng CSS, không cần ảnh hoặc API. Không cần biến môi trường hay dịch vụ backend. Có thể triển khai thư mục `dist/` lên dịch vụ hosting tĩnh sau khi build.

## Tự động kiểm tra trên cloud

Workflow `.github/workflows/check.yml` chạy trên GitHub Actions mỗi khi push hoặc tạo pull request, và có thể chạy thủ công. Nó cài dependencies bằng `npm ci`, chạy tests, build và lưu thư mục `dist/` thành artifact `website-dist`. Workflow chỉ hoạt động sau khi mã nguồn được đẩy lên GitHub và Actions được bật cho repository.

## Tự động triển khai website công khai

Kết nối repository với Vercel hoặc Netlify, chọn nhánh production `main`, Node.js 24, lệnh build `npm run build` và thư mục đầu ra `dist`. Sau lần kết nối đầu tiên, dịch vụ hosting sẽ tự build và triển khai khi có commit mới trên nhánh đã chọn. Có thể dùng `npm ci` làm lệnh cài đặt nếu dịch vụ cho phép cấu hình riêng.

GitHub Actions kiểm tra và dịch vụ hosting triển khai là hai quá trình độc lập; workflow hiện tại không chặn hosting triển khai khi test thất bại. Chưa có tài khoản hosting được kết nối và chưa có website công khai được triển khai từ môi trường này.

### Thiết lập Vercel một lần

1. Đưa mã nguồn này lên repository `thanhrong/demo1` trên GitHub.
2. Đăng nhập https://vercel.com/new bằng tài khoản của bạn, kết nối GitHub và import `thanhrong/demo1`. Nếu repository không xuất hiện, cấp quyền cho ứng dụng Vercel truy cập repository này.
3. Chọn thư mục gốc dự án, framework **Vite**, Node.js **24.x**, nhánh production **main**. File `vercel.json` đã khai báo cài đặt `npm ci`, build `npm run build` và đầu ra `dist`.
4. Chọn **Deploy**. Dự án không cần biến môi trường. Khi hoàn tất, Vercel cung cấp đường dẫn HTTPS công khai.
5. Những lần push tiếp theo lên `main` sẽ tự triển khai production. Pull request có thể có bản Preview theo cấu hình Git integration của Vercel.

Không cần nhập token Vercel vào mã nguồn hoặc GitHub Actions khi dùng Git integration. Trước khi triển khai, thay email mẫu `hello@example.com` và thông tin cá nhân trong `src/App.jsx`.
