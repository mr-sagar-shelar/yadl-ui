import type { Meta, StoryObj } from "@storybook/react";
import ArcKubernetes from "../ArcKubernetes";

const meta: Meta<typeof ArcKubernetes> = { title: "Azure/Other/ArcKubernetes", component: ArcKubernetes };

export default meta;
type Story = StoryObj<typeof ArcKubernetes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
