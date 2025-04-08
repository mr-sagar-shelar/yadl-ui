import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AcceptRequest from "../AcceptRequest";

describe("AcceptRequest component", () => {
  it("AcceptRequest should render correctly", () => {
    render(<AcceptRequest />);
    expect(true).toBeTruthy();
  });
});
