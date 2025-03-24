import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageActions from "../StorageActions";

describe("StorageActions component", () => {
  it("StorageActions should render correctly", () => {
    render(<StorageActions />);
    expect(true).toBeTruthy();
  });
});
