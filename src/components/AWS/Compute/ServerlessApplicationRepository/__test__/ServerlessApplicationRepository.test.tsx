import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServerlessApplicationRepository from "../ServerlessApplicationRepository";

describe("ServerlessApplicationRepository component", () => {
  it("ServerlessApplicationRepository should render correctly", () => {
    render(<ServerlessApplicationRepository />);
    expect(true).toBeTruthy();
  });
});
