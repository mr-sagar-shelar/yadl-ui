import type { Meta, StoryObj } from "@storybook/react";
import Scheduler from "../Scheduler";

const meta: Meta<typeof Scheduler> = { title: "Azure/General/Scheduler", component: Scheduler };

export default meta;
type Story = StoryObj<typeof Scheduler>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
