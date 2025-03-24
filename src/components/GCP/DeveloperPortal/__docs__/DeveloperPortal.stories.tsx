import type { Meta, StoryObj } from "@storybook/react";
import DeveloperPortal from "../DeveloperPortal";

const meta: Meta<typeof DeveloperPortal> = { title: "GCP/DeveloperPortal", component: DeveloperPortal };

export default meta;
type Story = StoryObj<typeof DeveloperPortal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
