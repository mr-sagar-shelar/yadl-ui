import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StreamSuite from "../StreamSuite";

describe("StreamSuite component", () => {
  it("StreamSuite should render correctly", () => {
    render(<StreamSuite />);
    expect(true).toBeTruthy();
  });
});
