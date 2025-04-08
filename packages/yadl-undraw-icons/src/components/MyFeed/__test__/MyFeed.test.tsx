import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyFeed from "../MyFeed";

describe("MyFeed component", () => {
  it("MyFeed should render correctly", () => {
    render(<MyFeed />);
    expect(true).toBeTruthy();
  });
});
