import type { Meta, StoryObj } from "@storybook/react";
import DedicatedHSM from "../DedicatedHSM";

const meta: Meta<typeof DedicatedHSM> = { title: "Azure/Other/DedicatedHSM", component: DedicatedHSM };

export default meta;
type Story = StoryObj<typeof DedicatedHSM>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
