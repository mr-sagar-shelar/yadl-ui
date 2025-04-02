import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import XD from "../XD";

describe("XD component", () => {
  it("XD should render correctly", () => {
    render(<XD />);
    expect(true).toBeTruthy();
  });
});
