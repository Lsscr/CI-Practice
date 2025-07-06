import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Counter } from "./Counter";

describe("Counter 组件", () => {
  it("渲染初始计数为0", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue).toHaveTextContent("当前计数：0");
  });

  it("可以接受自定义初始计数", () => {
    render(<Counter initialCount={10} />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue).toHaveTextContent("当前计数：10");
  });

  it("点击增加按钮时计数增加", () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId("increment-button");
    const countValue = screen.getByTestId("count-value");

    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("当前计数：1");
  });

  it("点击减少按钮时计数减少", () => {
    render(<Counter initialCount={5} />);
    const decrementButton = screen.getByTestId("decrement-button");
    const countValue = screen.getByTestId("count-value");

    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent("当前计数：4");
  });

  it("点击重置按钮时计数重置为初始值", () => {
    render(<Counter initialCount={5} />);
    const resetButton = screen.getByTestId("reset-button");
    const incrementButton = screen.getByTestId("increment-button");
    const countValue = screen.getByTestId("count-value");

    // 先增加计数
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("当前计数：7");

    // 重置
    fireEvent.click(resetButton);
    expect(countValue).toHaveTextContent("当前计数：5");
  });
});
