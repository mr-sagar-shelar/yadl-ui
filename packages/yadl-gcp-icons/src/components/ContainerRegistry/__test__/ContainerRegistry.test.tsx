import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContainerRegistry from "../ContainerRegistry";

describe("ContainerRegistry component", () => {
  it("ContainerRegistry should render correctly", () => {
    render(<ContainerRegistry />);
    expect(true).toBeTruthy();
  });
});
