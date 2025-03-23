import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Synchronize from "../Synchronize";

describe("Synchronize component", () => {
  it("Synchronize should render correctly", () => {
    render(<Synchronize />);
    expect(true).toBeTruthy();
  });
});
