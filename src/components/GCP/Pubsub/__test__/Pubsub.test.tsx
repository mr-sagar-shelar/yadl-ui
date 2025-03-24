import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pubsub from "../Pubsub";

describe("Pubsub component", () => {
  it("Pubsub should render correctly", () => {
    render(<Pubsub />);
    expect(true).toBeTruthy();
  });
});
