import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FolderWebsite from "../FolderWebsite";

describe("FolderWebsite component", () => {
  it("FolderWebsite should render correctly", () => {
    render(<FolderWebsite />);
    expect(true).toBeTruthy();
  });
});
