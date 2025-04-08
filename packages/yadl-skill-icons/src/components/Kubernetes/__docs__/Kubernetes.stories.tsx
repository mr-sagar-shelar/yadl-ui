import type { Meta, StoryObj } from "@storybook/react";
import Kubernetes from "../Kubernetes";

const meta: Meta<typeof Kubernetes> = { title: "SkillIcon/Kubernetes", component: Kubernetes };

export default meta;
type Story = StoryObj<typeof Kubernetes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
