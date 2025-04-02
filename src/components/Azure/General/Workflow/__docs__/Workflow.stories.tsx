import type { Meta, StoryObj } from "@storybook/react";
import Workflow from "../Workflow";

const meta: Meta<typeof Workflow> = { title: "Azure/General/Workflow", component: Workflow };

export default meta;
type Story = StoryObj<typeof Workflow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
