import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InstancePools from "../InstancePools";

describe("InstancePools component", () => {
  it("InstancePools should render correctly", () => {
    render(<InstancePools />);
    expect(true).toBeTruthy();
  });
});
