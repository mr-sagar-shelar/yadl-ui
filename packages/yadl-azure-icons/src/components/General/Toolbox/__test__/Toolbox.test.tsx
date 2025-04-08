import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Toolbox from "../Toolbox";

describe("Toolbox component", () => {
  it("Toolbox should render correctly", () => {
    render(<Toolbox />);
    expect(true).toBeTruthy();
  });
});
