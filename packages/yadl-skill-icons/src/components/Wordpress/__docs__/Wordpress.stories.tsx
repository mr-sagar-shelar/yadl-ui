import type { Meta, StoryObj } from "@storybook/react";
import Wordpress from "../Wordpress";

const meta: Meta<typeof Wordpress> = { title: "SkillIcon/Wordpress", component: Wordpress };

export default meta;
type Story = StoryObj<typeof Wordpress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
