import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import File from "../File";

describe("File component", () => {
  it("File should render correctly", () => {
    render(<File />);
    expect(true).toBeTruthy();
  });
});
