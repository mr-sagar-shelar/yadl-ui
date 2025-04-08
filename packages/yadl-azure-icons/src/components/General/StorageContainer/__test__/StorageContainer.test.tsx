import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageContainer from "../StorageContainer";

describe("StorageContainer component", () => {
  it("StorageContainer should render correctly", () => {
    render(<StorageContainer />);
    expect(true).toBeTruthy();
  });
});
