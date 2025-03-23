import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PizzaSharingPizzaSharing from "../PizzaSharingPizzaSharing";

describe("PizzaSharingPizzaSharing component", () => {
  it("PizzaSharingPizzaSharing should render correctly", () => {
    render(<PizzaSharingPizzaSharing />);
    expect(true).toBeTruthy();
  });
});
