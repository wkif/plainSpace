// 导出防抖函数
export function debounce(func: Function, wait: number): Function {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (...args: any[]) {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
