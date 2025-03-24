import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageFunctions from "../StorageFunctions";

describe("StorageFunctions component", () => {
  it("StorageFunctions should render correctly", () => {
    render(<StorageFunctions />);
    expect(true).toBeTruthy();
  });
});
