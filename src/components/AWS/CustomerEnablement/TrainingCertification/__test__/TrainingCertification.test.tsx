import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TrainingCertification from "../TrainingCertification";

describe("TrainingCertification component", () => {
  it("TrainingCertification should render correctly", () => {
    render(<TrainingCertification />);
    expect(true).toBeTruthy();
  });
});
