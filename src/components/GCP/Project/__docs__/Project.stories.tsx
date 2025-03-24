import type { Meta, StoryObj } from "@storybook/react";
import Project from "../Project";

const meta: Meta<typeof Project> = { title: "GCP/Project", component: Project };

export default meta;
type Story = StoryObj<typeof Project>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
