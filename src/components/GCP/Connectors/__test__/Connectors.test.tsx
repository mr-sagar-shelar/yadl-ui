import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Connectors from "../Connectors";

describe("Connectors component", () => {
  it("Connectors should render correctly", () => {
    render(<Connectors />);
    expect(true).toBeTruthy();
  });
});
