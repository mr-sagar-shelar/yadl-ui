import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SharingKnowledge from "../SharingKnowledge";

describe("SharingKnowledge component", () => {
  it("SharingKnowledge should render correctly", () => {
    render(<SharingKnowledge />);
    expect(true).toBeTruthy();
  });
});
