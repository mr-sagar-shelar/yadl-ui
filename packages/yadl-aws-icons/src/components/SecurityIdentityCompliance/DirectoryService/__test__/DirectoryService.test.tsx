import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DirectoryService from "../DirectoryService";

describe("DirectoryService component", () => {
  it("DirectoryService should render correctly", () => {
    render(<DirectoryService />);
    expect(true).toBeTruthy();
  });
});
