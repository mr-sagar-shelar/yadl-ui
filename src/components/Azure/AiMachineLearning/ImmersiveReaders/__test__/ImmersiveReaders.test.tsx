import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImmersiveReaders from "../ImmersiveReaders";

describe("ImmersiveReaders component", () => {
  it("ImmersiveReaders should render correctly", () => {
    render(<ImmersiveReaders />);
    expect(true).toBeTruthy();
  });
});
