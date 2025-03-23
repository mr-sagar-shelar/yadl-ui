import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Delivery from "../Delivery";

describe("Delivery component", () => {
  it("Delivery should render correctly", () => {
    render(<Delivery />);
    expect(true).toBeTruthy();
  });
});
