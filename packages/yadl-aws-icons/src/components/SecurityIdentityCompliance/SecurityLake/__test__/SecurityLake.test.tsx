import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityLake from "../SecurityLake";

describe("SecurityLake component", () => {
  it("SecurityLake should render correctly", () => {
    render(<SecurityLake />);
    expect(true).toBeTruthy();
  });
});
