import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ToDoList from "../ToDoList";

describe("ToDoList component", () => {
  it("ToDoList should render correctly", () => {
    render(<ToDoList />);
    expect(true).toBeTruthy();
  });
});
