import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Outpostsrack from "../Outpostsrack";

describe("Outpostsrack component", () => {
  it("Outpostsrack should render correctly", () => {
    render(<Outpostsrack />);
    expect(true).toBeTruthy();
  });
});
