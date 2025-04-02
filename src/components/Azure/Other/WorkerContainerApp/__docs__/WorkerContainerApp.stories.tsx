import type { Meta, StoryObj } from "@storybook/react";
import WorkerContainerApp from "../WorkerContainerApp";

const meta: Meta<typeof WorkerContainerApp> = { title: "Azure/Other/WorkerContainerApp", component: WorkerContainerApp };

export default meta;
type Story = StoryObj<typeof WorkerContainerApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
