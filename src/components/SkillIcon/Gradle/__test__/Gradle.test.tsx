import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gradle from "../Gradle";

describe("Gradle component", () => {
  it("Gradle should render correctly", () => {
    render(<Gradle />);
    expect(true).toBeTruthy();
  });
});
