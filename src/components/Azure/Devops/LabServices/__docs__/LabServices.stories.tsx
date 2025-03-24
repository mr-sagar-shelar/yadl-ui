import type { Meta, StoryObj } from "@storybook/react";
import LabServices from "../LabServices";

const meta: Meta<typeof LabServices> = { title: "Azure/Devops/LabServices", component: LabServices };

export default meta;
type Story = StoryObj<typeof LabServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
