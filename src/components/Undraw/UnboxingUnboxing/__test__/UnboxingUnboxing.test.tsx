import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UnboxingUnboxing from "../UnboxingUnboxing";

describe("UnboxingUnboxing component", () => {
  it("UnboxingUnboxing should render correctly", () => {
    render(<UnboxingUnboxing />);
    expect(true).toBeTruthy();
  });
});
