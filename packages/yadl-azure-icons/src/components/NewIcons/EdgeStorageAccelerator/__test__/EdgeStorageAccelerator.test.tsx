import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EdgeStorageAccelerator from "../EdgeStorageAccelerator";

describe("EdgeStorageAccelerator component", () => {
  it("EdgeStorageAccelerator should render correctly", () => {
    render(<EdgeStorageAccelerator />);
    expect(true).toBeTruthy();
  });
});
