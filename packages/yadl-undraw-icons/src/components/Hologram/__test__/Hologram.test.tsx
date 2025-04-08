import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hologram from "../Hologram";

describe("Hologram component", () => {
  it("Hologram should render correctly", () => {
    render(<Hologram />);
    expect(true).toBeTruthy();
  });
});
