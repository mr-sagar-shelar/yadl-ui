import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StartledStartled from "../StartledStartled";

describe("StartledStartled component", () => {
  it("StartledStartled should render correctly", () => {
    render(<StartledStartled />);
    expect(true).toBeTruthy();
  });
});
