import type { Meta, StoryObj } from "@storybook/react";
import CloudRoutes from "../CloudRoutes";

const meta: Meta<typeof CloudRoutes> = { title: "GCP/CloudRoutes", component: CloudRoutes };

export default meta;
type Story = StoryObj<typeof CloudRoutes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
