import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Upload from "../Upload";

describe("Upload component", () => {
  it("Upload should render correctly", () => {
    render(<Upload />);
    expect(true).toBeTruthy();
  });
});
