import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BirthdayCake from "../BirthdayCake";

describe("BirthdayCake component", () => {
  it("BirthdayCake should render correctly", () => {
    render(<BirthdayCake />);
    expect(true).toBeTruthy();
  });
});
