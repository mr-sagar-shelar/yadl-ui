import type { Meta, StoryObj } from "@storybook/react";
import Kuberun from "../Kuberun";

const meta: Meta<typeof Kuberun> = { title: "GCP/Kuberun", component: Kuberun };

export default meta;
type Story = StoryObj<typeof Kuberun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
