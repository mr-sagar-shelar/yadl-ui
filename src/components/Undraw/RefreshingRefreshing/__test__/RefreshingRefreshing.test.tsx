import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RefreshingRefreshing from "../RefreshingRefreshing";

describe("RefreshingRefreshing component", () => {
  it("RefreshingRefreshing should render correctly", () => {
    render(<RefreshingRefreshing />);
    expect(true).toBeTruthy();
  });
});
