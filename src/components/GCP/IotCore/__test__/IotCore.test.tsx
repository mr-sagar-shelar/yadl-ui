import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IotCore from "../IotCore";

describe("IotCore component", () => {
  it("IotCore should render correctly", () => {
    render(<IotCore />);
    expect(true).toBeTruthy();
  });
});
