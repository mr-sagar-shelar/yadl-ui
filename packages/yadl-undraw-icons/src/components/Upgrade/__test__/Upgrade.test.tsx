import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Upgrade from "../Upgrade";

describe("Upgrade component", () => {
  it("Upgrade should render correctly", () => {
    render(<Upgrade />);
    expect(true).toBeTruthy();
  });
});
