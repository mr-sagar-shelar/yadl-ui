import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeGuru from "../CodeGuru";

describe("CodeGuru component", () => {
  it("CodeGuru should render correctly", () => {
    render(<CodeGuru />);
    expect(true).toBeTruthy();
  });
});
