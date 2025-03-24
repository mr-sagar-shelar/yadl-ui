import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageExplorer from "../StorageExplorer";

describe("StorageExplorer component", () => {
  it("StorageExplorer should render correctly", () => {
    render(<StorageExplorer />);
    expect(true).toBeTruthy();
  });
});
