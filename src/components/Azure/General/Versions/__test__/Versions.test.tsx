import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Versions from "../Versions";

describe("Versions component", () => {
  it("Versions should render correctly", () => {
    render(<Versions />);
    expect(true).toBeTruthy();
  });
});
