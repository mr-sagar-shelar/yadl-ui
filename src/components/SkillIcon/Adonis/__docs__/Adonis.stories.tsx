import type { Meta, StoryObj } from "@storybook/react";
import Adonis from "../Adonis";

const meta: Meta<typeof Adonis> = { title: "SkillIcon/Adonis", component: Adonis };

export default meta;
type Story = StoryObj<typeof Adonis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
