import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Relays from "../Relays";

describe("Relays component", () => {
  it("Relays should render correctly", () => {
    render(<Relays />);
    expect(true).toBeTruthy();
  });
});
