import type { Meta, StoryObj } from "@storybook/react";
import Gulp from "../Gulp";

const meta: Meta<typeof Gulp> = { title: "SkillIcon/Gulp", component: Gulp };

export default meta;
type Story = StoryObj<typeof Gulp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
