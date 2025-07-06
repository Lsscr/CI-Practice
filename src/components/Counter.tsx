import { useState } from "react";

interface CounterProps {
  initialCount?: number;
}

export function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter">
      <h2>计数器</h2>
      <p data-testid="count-value">当前计数：{count}</p>
      <div className="buttons">
        <button
          onClick={() => setCount(count - 1)}
          data-testid="decrement-button"
        >
          减少
        </button>
        <button
          onClick={() => setCount(count + 1)}
          data-testid="increment-button"
        >
          增加
        </button>
        <button
          onClick={() => setCount(initialCount)}
          data-testid="reset-button"
        >
          重置
        </button>
      </div>
    </div>
  );
}
