import type { Meta, StoryObj } from "@storybook/react";
import Apple from "../Apple";

const meta: Meta<typeof Apple> = { title: "SkillIcon/Apple", component: Apple };

export default meta;
type Story = StoryObj<typeof Apple>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
