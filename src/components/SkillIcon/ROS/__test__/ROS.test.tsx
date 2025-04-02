import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ROS from "../ROS";

describe("ROS component", () => {
  it("ROS should render correctly", () => {
    render(<ROS />);
    expect(true).toBeTruthy();
  });
});
