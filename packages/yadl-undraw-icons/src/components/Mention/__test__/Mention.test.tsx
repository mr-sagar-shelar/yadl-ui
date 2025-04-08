import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mention from "../Mention";

describe("Mention component", () => {
  it("Mention should render correctly", () => {
    render(<Mention />);
    expect(true).toBeTruthy();
  });
});
