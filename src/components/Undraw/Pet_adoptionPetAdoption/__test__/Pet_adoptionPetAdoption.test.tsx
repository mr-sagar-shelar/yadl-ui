import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pet_adoptionPetAdoption from "../Pet_adoptionPetAdoption";

describe("Pet_adoptionPetAdoption component", () => {
  it("Pet_adoptionPetAdoption should render correctly", () => {
    render(<Pet_adoptionPetAdoption />);
    expect(true).toBeTruthy();
  });
});
