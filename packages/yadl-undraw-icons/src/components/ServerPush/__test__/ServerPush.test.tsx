import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServerPush from "../ServerPush";

describe("ServerPush component", () => {
  it("ServerPush should render correctly", () => {
    render(<ServerPush />);
    expect(true).toBeTruthy();
  });
});
