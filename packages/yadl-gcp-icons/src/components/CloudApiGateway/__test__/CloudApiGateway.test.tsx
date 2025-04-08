import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudApiGateway from "../CloudApiGateway";

describe("CloudApiGateway component", () => {
  it("CloudApiGateway should render correctly", () => {
    render(<CloudApiGateway />);
    expect(true).toBeTruthy();
  });
});
