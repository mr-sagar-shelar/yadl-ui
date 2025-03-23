import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddFile from "../AddFile";

describe("AddFile component", () => {
  it("AddFile should render correctly", () => {
    render(<AddFile />);
    expect(true).toBeTruthy();
  });
});
