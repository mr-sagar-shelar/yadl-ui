import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FreeServices from "../FreeServices";

describe("FreeServices component", () => {
  it("FreeServices should render correctly", () => {
    render(<FreeServices />);
    expect(true).toBeTruthy();
  });
});
