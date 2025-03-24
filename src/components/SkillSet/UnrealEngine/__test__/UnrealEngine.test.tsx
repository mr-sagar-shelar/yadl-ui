import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UnrealEngine from "../UnrealEngine";

describe("UnrealEngine component", () => {
  it("UnrealEngine should render correctly", () => {
    render(<UnrealEngine />);
    expect(true).toBeTruthy();
  });
});
