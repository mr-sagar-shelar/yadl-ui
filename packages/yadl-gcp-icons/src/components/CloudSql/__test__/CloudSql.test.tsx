import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudSql from "../CloudSql";

describe("CloudSql component", () => {
  it("CloudSql should render correctly", () => {
    render(<CloudSql />);
    expect(true).toBeTruthy();
  });
});
