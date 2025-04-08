import type { Meta, StoryObj } from "@storybook/react";
import MedicalCare from "../MedicalCare";

const meta: Meta<typeof MedicalCare> = { title: "unDraw/MedicalCare", component: MedicalCare };

export default meta;
type Story = StoryObj<typeof MedicalCare>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
