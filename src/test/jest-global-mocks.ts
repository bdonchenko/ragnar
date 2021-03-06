const mock = () => {
  let storage = {};
  return {
    getItem: (key: string) => (key in storage ? storage[key] : null),
    setItem: (key: string | number, value: string) =>
      (storage[key] = value || ''),
    removeItem: (key: string | number) => delete storage[key],
    clear: () => (storage = {})
  };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});
