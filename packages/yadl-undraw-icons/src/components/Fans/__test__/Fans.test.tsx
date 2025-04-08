import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fans from "../Fans";

describe("Fans component", () => {
  it("Fans should render correctly", () => {
    render(<Fans />);
    expect(true).toBeTruthy();
  });
});
