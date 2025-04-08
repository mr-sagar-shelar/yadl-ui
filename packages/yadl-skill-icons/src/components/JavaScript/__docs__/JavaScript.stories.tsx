import type { Meta, StoryObj } from "@storybook/react";
import JavaScript from "../JavaScript";

const meta: Meta<typeof JavaScript> = { title: "SkillIcon/JavaScript", component: JavaScript };

export default meta;
type Story = StoryObj<typeof JavaScript>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
