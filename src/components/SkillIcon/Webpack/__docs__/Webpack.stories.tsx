import type { Meta, StoryObj } from "@storybook/react";
import Webpack from "../Webpack";

const meta: Meta<typeof Webpack> = { title: "SkillIcon/Webpack", component: Webpack };

export default meta;
type Story = StoryObj<typeof Webpack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
