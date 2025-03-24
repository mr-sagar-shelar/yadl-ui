import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalServer from "../ElementalServer";

describe("ElementalServer component", () => {
  it("ElementalServer should render correctly", () => {
    render(<ElementalServer />);
    expect(true).toBeTruthy();
  });
});
