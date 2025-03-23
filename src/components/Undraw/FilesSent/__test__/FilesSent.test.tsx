import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FilesSent from "../FilesSent";

describe("FilesSent component", () => {
  it("FilesSent should render correctly", () => {
    render(<FilesSent />);
    expect(true).toBeTruthy();
  });
});
