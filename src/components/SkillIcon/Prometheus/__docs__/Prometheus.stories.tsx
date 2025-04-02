import type { Meta, StoryObj } from "@storybook/react";
import Prometheus from "../Prometheus";

const meta: Meta<typeof Prometheus> = { title: "SkillIcon/Prometheus", component: Prometheus };

export default meta;
type Story = StoryObj<typeof Prometheus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
