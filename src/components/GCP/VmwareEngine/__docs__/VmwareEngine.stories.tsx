import type { Meta, StoryObj } from "@storybook/react";
import VmwareEngine from "../VmwareEngine";

const meta: Meta<typeof VmwareEngine> = { title: "GCP/VmwareEngine", component: VmwareEngine };

export default meta;
type Story = StoryObj<typeof VmwareEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
