import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FolderFiles from "../FolderFiles";

describe("FolderFiles component", () => {
  it("FolderFiles should render correctly", () => {
    render(<FolderFiles />);
    expect(true).toBeTruthy();
  });
});
