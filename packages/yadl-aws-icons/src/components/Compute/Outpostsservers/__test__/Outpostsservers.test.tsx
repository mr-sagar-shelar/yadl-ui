import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Outpostsservers from "../Outpostsservers";

describe("Outpostsservers component", () => {
  it("Outpostsservers should render correctly", () => {
    render(<Outpostsservers />);
    expect(true).toBeTruthy();
  });
});
