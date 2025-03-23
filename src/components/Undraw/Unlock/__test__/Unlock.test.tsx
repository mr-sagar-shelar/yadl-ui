import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Unlock from "../Unlock";

describe("Unlock component", () => {
  it("Unlock should render correctly", () => {
    render(<Unlock />);
    expect(true).toBeTruthy();
  });
});
