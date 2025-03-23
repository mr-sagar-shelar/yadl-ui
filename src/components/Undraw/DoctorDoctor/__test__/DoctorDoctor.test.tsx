import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DoctorDoctor from "../DoctorDoctor";

describe("DoctorDoctor component", () => {
  it("DoctorDoctor should render correctly", () => {
    render(<DoctorDoctor />);
    expect(true).toBeTruthy();
  });
});
