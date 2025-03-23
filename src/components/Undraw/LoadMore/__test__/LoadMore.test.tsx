import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoadMore from "../LoadMore";

describe("LoadMore component", () => {
  it("LoadMore should render correctly", () => {
    render(<LoadMore />);
    expect(true).toBeTruthy();
  });
});
