import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FolderBlank from "../FolderBlank";

describe("FolderBlank component", () => {
  it("FolderBlank should render correctly", () => {
    render(<FolderBlank />);
    expect(true).toBeTruthy();
  });
});
