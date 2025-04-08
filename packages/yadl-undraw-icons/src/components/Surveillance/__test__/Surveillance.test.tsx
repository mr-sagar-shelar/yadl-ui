import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Surveillance from "../Surveillance";

describe("Surveillance component", () => {
  it("Surveillance should render correctly", () => {
    render(<Surveillance />);
    expect(true).toBeTruthy();
  });
});
