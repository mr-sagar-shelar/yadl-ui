import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import APIGateway from "../APIGateway";

describe("APIGateway component", () => {
  it("APIGateway should render correctly", () => {
    render(<APIGateway />);
    expect(true).toBeTruthy();
  });
});
