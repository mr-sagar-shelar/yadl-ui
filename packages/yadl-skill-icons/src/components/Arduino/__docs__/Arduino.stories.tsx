import type { Meta, StoryObj } from "@storybook/react";
import Arduino from "../Arduino";

const meta: Meta<typeof Arduino> = { title: "SkillIcon/Arduino", component: Arduino };

export default meta;
type Story = StoryObj<typeof Arduino>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
