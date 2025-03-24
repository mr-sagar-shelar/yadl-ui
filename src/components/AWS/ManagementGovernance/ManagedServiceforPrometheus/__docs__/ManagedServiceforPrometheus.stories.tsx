import type { Meta, StoryObj } from "@storybook/react";
import ManagedServiceforPrometheus from "../ManagedServiceforPrometheus";

const meta: Meta<typeof ManagedServiceforPrometheus> = { title: "AWS/ManagementGovernance/ManagedServiceforPrometheus", component: ManagedServiceforPrometheus };

export default meta;
type Story = StoryObj<typeof ManagedServiceforPrometheus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
