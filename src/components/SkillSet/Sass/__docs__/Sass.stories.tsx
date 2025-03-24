import type { Meta, StoryObj } from "@storybook/react";
import Sass from "../Sass";

const meta: Meta<typeof Sass> = { title: "SkillSet/Sass", component: Sass };

export default meta;
type Story = StoryObj<typeof Sass>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
