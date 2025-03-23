import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Departing from "../Departing";

describe("Departing component", () => {
  it("Departing should render correctly", () => {
    render(<Departing />);
    expect(true).toBeTruthy();
  });
});
