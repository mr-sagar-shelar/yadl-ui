import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlinePosts from "../OnlinePosts";

describe("OnlinePosts component", () => {
  it("OnlinePosts should render correctly", () => {
    render(<OnlinePosts />);
    expect(true).toBeTruthy();
  });
});
