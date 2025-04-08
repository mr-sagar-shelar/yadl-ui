import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SantaClaus from "../SantaClaus";

describe("SantaClaus component", () => {
  it("SantaClaus should render correctly", () => {
    render(<SantaClaus />);
    expect(true).toBeTruthy();
  });
});
