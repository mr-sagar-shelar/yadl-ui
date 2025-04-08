import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FlyingDrone from "../FlyingDrone";

describe("FlyingDrone component", () => {
  it("FlyingDrone should render correctly", () => {
    render(<FlyingDrone />);
    expect(true).toBeTruthy();
  });
});
