import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cassandra from "../Cassandra";

describe("Cassandra component", () => {
  it("Cassandra should render correctly", () => {
    render(<Cassandra />);
    expect(true).toBeTruthy();
  });
});
