import type { Meta, StoryObj } from "@storybook/react";
import CloudTasks from "../CloudTasks";

const meta: Meta<typeof CloudTasks> = { title: "GCP/CloudTasks", component: CloudTasks };

export default meta;
type Story = StoryObj<typeof CloudTasks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
