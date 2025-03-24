import type { Meta, StoryObj } from "@storybook/react";
import OpenShift from "../OpenShift";

const meta: Meta<typeof OpenShift> = { title: "SkillSet/OpenShift", component: OpenShift };

export default meta;
type Story = StoryObj<typeof OpenShift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
