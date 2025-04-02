import type { Meta, StoryObj } from "@storybook/react";
import Django from "../Django";

const meta: Meta<typeof Django> = { title: "SkillIcon/Django", component: Django };

export default meta;
type Story = StoryObj<typeof Django>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
