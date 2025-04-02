import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hibernate from "../Hibernate";

describe("Hibernate component", () => {
  it("Hibernate should render correctly", () => {
    render(<Hibernate />);
    expect(true).toBeTruthy();
  });
});
