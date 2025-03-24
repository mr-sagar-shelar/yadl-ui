import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Kinesis from "../Kinesis";

describe("Kinesis component", () => {
  it("Kinesis should render correctly", () => {
    render(<Kinesis />);
    expect(true).toBeTruthy();
  });
});
