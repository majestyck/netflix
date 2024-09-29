import '@testing-library/jest-dom'
import { Mock } from 'vitest';


const observe = vi.fn();
const unobserve = vi.fn();

// you can also pass the mock implementation
// to vi.fn as an argument
window.IntersectionObserver = vi.fn(() => ({
  observe,
  unobserve,
})) as Mock