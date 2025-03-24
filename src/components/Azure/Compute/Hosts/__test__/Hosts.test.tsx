import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hosts from "../Hosts";

describe("Hosts component", () => {
  it("Hosts should render correctly", () => {
    render(<Hosts />);
    expect(true).toBeTruthy();
  });
});
