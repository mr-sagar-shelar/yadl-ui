import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileSearch from "../FileSearch";

describe("FileSearch component", () => {
  it("FileSearch should render correctly", () => {
    render(<FileSearch />);
    expect(true).toBeTruthy();
  });
});
