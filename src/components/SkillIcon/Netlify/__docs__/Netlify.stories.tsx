import type { Meta, StoryObj } from "@storybook/react";
import Netlify from "../Netlify";

const meta: Meta<typeof Netlify> = { title: "SkillIcon/Netlify", component: Netlify };

export default meta;
type Story = StoryObj<typeof Netlify>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
