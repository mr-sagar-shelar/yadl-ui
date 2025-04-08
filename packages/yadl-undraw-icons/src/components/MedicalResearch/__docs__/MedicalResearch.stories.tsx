import type { Meta, StoryObj } from "@storybook/react";
import MedicalResearch from "../MedicalResearch";

const meta: Meta<typeof MedicalResearch> = { title: "unDraw/MedicalResearch", component: MedicalResearch };

export default meta;
type Story = StoryObj<typeof MedicalResearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
