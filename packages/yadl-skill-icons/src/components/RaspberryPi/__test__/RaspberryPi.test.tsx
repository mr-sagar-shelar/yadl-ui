import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RaspberryPi from "../RaspberryPi";

describe("RaspberryPi component", () => {
  it("RaspberryPi should render correctly", () => {
    render(<RaspberryPi />);
    expect(true).toBeTruthy();
  });
});
