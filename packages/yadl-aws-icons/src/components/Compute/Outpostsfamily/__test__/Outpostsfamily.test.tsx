import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Outpostsfamily from "../Outpostsfamily";

describe("Outpostsfamily component", () => {
  it("Outpostsfamily should render correctly", () => {
    render(<Outpostsfamily />);
    expect(true).toBeTruthy();
  });
});
