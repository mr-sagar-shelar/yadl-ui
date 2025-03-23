import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Barista from "../Barista";

describe("Barista component", () => {
  it("Barista should render correctly", () => {
    render(<Barista />);
    expect(true).toBeTruthy();
  });
});
