import type { Meta, StoryObj } from "@storybook/react";
import CloudTestLab from "../CloudTestLab";

const meta: Meta<typeof CloudTestLab> = { title: "GCP/CloudTestLab", component: CloudTestLab };

export default meta;
type Story = StoryObj<typeof CloudTestLab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
