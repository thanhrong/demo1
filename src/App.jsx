import React, { useState } from 'react';

// Thay thông tin mẫu tại đây bằng thông tin của bạn.
export const profile = {
  name: 'Thanh', role: 'Frontend Developer', location: 'Việt Nam',
  email: 'hello@example.com', github: 'https://github.com/thanhrong',
  intro: 'Mình biến những ý tưởng thành trải nghiệm số đơn giản, tinh tế và dễ sử dụng.',
};
const projects = [
  { name: 'Không gian sáng tạo', category: 'Website', number: '01', description: 'Ý tưởng website cho một studio sáng tạo, tập trung vào nội dung và những chi tiết nhỏ.', tags: ['React', 'CSS'], style: 'studio', art: 'create.' },
  { name: 'Một ngày hiệu quả', category: 'Ứng dụng', number: '02', description: 'Ý tưởng ứng dụng quản lý công việc giúp mỗi ngày bắt đầu với mục tiêu rõ ràng.', tags: ['React', 'UI Design'], style: 'planner', art: 'make time' },
  { name: 'Góc đọc sách', category: 'Website', number: '03', description: 'Ý tưởng thư viện cá nhân để lưu những cuốn sách hay và chia sẻ cảm hứng đọc.', tags: ['JavaScript', 'Responsive'], style: 'books', art: 'a good read.' },
];
export default function App() {
  const [filter, setFilter] = useState('Tất cả');
  const visible = projects.filter(project => filter === 'Tất cả' || project.category === filter);
  return <>
    <header className="header"><a className="logo" href="#home" aria-label="Về đầu trang">thanh<span>.</span></a><nav aria-label="Điều hướng chính"><a href="#about">Giới thiệu</a><a href="#projects">Dự án</a><a className="nav-contact" href="#contact">Kết nối <span aria-hidden="true">↗</span></a></nav></header>
    <main>
      <section id="home" className="hero wrap"><div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> XIN CHÀO, MÌNH LÀ {profile.name.toUpperCase()}</p><h1>Code với tư duy.<br/>Thiết kế với <em>cảm xúc.</em></h1><p className="intro">{profile.intro}</p><div className="hero-actions"><a className="button dark" href="#projects">Khám phá dự án <span aria-hidden="true">↗</span></a><a className="text-link" href="#contact">Cùng trò chuyện <span aria-hidden="true">→</span></a></div><p className="location">{profile.role} <span> / </span> {profile.location}</p></div><div className="hero-art" aria-label="Minh họa trừu tượng với các hình khối màu xanh"><div className="art-grid"/><div className="orb"/><div className="art-caption">A LITTLE LOGIC.<br/>A LOT OF POSSIBILITY.</div><span className="art-star" aria-hidden="true">✳</span><div className="floating-note"><span aria-hidden="true">✦</span> Luôn tò mò. Luôn học hỏi.</div></div></section>
      <section id="about" className="about wrap"><div><p className="eyebrow">01 / VỀ MÌNH</p><h2>Một chút về người<br/>đứng sau màn hình.</h2></div><div className="about-copy"><p>Mình là {profile.name}, một lập trình viên yêu thích giao điểm giữa công nghệ và thiết kế. Mình quan tâm đến cách một sản phẩm hoạt động, cũng như cảm giác khi sử dụng nó.</p><p>Từ một bản phác thảo đến những dòng code cuối cùng, mình luôn tìm cách làm mọi thứ rõ ràng hơn, hữu ích hơn và có cá tính riêng.</p><div className="skills" aria-label="Kỹ năng">{['React', 'JavaScript', 'HTML & CSS', 'Responsive Design', 'Git'].map(skill => <span key={skill}>{skill}</span>)}</div></div></section>
      <section id="projects" className="projects wrap"><div className="section-top"><div><p className="eyebrow">02 / DỰ ÁN</p><h2>Những ý tưởng thành hình.</h2><p className="muted">Các ý tưởng mẫu — thay bằng dự án thực tế của bạn.</p></div><div className="filters" aria-label="Lọc dự án">{['Tất cả', 'Website', 'Ứng dụng'].map(value => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</button>)}</div></div><div className="project-grid">{visible.map(project => <article className="project" key={project.name}><div className={`project-art ${project.style}`}><span className="project-number">{project.number} / CONCEPT</span><strong>{project.art}</strong><span className="art-bottom">{project.category.toUpperCase()} · PERSONAL PROJECT</span></div><div className="project-title"><h3>{project.name}</h3><span aria-hidden="true">↗</span></div><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
      <section id="contact" className="contact wrap"><p className="eyebrow">03 / KẾT NỐI</p><h2>Một ý tưởng hay<br/>bắt đầu từ <em>lời chào.</em></h2><p>Bạn có dự án thú vị, hoặc chỉ muốn trò chuyện?<br/>Mình luôn sẵn lòng lắng nghe.</p><a className="button dark" href={`mailto:${profile.email}`}>Gửi email cho mình <span aria-hidden="true">↗</span></a><p className="email-note">Email mẫu: {profile.email}</p><span className="contact-star" aria-hidden="true">✳</span></section>
    </main><footer className="wrap"><span>© {new Date().getFullYear()} {profile.name}. Được tạo với sự tò mò.</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#home">Về đầu trang ↑</a></footer>
  </>;
}
