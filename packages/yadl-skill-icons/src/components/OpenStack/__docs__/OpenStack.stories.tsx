import type { Meta, StoryObj } from "@storybook/react";
import OpenStack from "../OpenStack";

const meta: Meta<typeof OpenStack> = { title: "SkillIcon/OpenStack", component: OpenStack };

export default meta;
type Story = StoryObj<typeof OpenStack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
