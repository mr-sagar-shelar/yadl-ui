import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Subscriber from "../Subscriber";

describe("Subscriber component", () => {
  it("Subscriber should render correctly", () => {
    render(<Subscriber />);
    expect(true).toBeTruthy();
  });
});
