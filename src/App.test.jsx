// @vitest-environment jsdom
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App, { profile } from './App.jsx';
afterEach(cleanup);
describe('Portfolio', () => {
  it('hiển thị giới thiệu, ba dự án mẫu và liên kết liên hệ', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Code với tư duy.');
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByRole('link', { name: /Gửi email/ })).toHaveAttribute('href', `mailto:${profile.email}`);
    expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', profile.github);
  });
  it('lọc dự án theo danh mục và khôi phục tất cả', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Ứng dụng' });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByRole('article')).toHaveLength(1);
    expect(screen.getByRole('heading', { name: 'Một ngày hiệu quả' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Website' }));
    expect(screen.getAllByRole('article')).toHaveLength(2);
    fireEvent.click(screen.getByRole('button', { name: 'Tất cả' }));
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
