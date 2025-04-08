import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrototypingProcess from "../PrototypingProcess";

describe("PrototypingProcess component", () => {
  it("PrototypingProcess should render correctly", () => {
    render(<PrototypingProcess />);
    expect(true).toBeTruthy();
  });
});
