import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RestorePoints from "../RestorePoints";

describe("RestorePoints component", () => {
  it("RestorePoints should render correctly", () => {
    render(<RestorePoints />);
    expect(true).toBeTruthy();
  });
});
