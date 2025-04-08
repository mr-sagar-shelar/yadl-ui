import type { Meta, StoryObj } from "@storybook/react";
import CloudRunForAnthos from "../CloudRunForAnthos";

const meta: Meta<typeof CloudRunForAnthos> = { title: "GCP/CloudRunForAnthos", component: CloudRunForAnthos };

export default meta;
type Story = StoryObj<typeof CloudRunForAnthos>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
