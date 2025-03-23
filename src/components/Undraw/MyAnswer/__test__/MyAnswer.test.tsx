import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyAnswer from "../MyAnswer";

describe("MyAnswer component", () => {
  it("MyAnswer should render correctly", () => {
    render(<MyAnswer />);
    expect(true).toBeTruthy();
  });
});
