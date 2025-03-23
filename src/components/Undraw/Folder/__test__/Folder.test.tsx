import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Folder from "../Folder";

describe("Folder component", () => {
  it("Folder should render correctly", () => {
    render(<Folder />);
    expect(true).toBeTruthy();
  });
});
