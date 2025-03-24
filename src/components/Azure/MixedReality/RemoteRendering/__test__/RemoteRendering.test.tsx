import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RemoteRendering from "../RemoteRendering";

describe("RemoteRendering component", () => {
  it("RemoteRendering should render correctly", () => {
    render(<RemoteRendering />);
    expect(true).toBeTruthy();
  });
});
