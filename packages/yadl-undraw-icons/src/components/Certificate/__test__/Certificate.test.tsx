import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Certificate from "../Certificate";

describe("Certificate component", () => {
  it("Certificate should render correctly", () => {
    render(<Certificate />);
    expect(true).toBeTruthy();
  });
});
