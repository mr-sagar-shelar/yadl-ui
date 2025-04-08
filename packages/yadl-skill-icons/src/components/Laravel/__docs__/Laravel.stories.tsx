import type { Meta, StoryObj } from "@storybook/react";
import Laravel from "../Laravel";

const meta: Meta<typeof Laravel> = { title: "SkillIcon/Laravel", component: Laravel };

export default meta;
type Story = StoryObj<typeof Laravel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
