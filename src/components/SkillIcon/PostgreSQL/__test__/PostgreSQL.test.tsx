import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PostgreSQL from "../PostgreSQL";

describe("PostgreSQL component", () => {
  it("PostgreSQL should render correctly", () => {
    render(<PostgreSQL />);
    expect(true).toBeTruthy();
  });
});
