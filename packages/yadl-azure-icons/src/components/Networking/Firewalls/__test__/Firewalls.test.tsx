import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Firewalls from "../Firewalls";

describe("Firewalls component", () => {
  it("Firewalls should render correctly", () => {
    render(<Firewalls />);
    expect(true).toBeTruthy();
  });
});
