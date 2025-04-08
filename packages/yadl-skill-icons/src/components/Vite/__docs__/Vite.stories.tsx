import type { Meta, StoryObj } from "@storybook/react";
import Vite from "../Vite";

const meta: Meta<typeof Vite> = { title: "SkillIcon/Vite", component: Vite };

export default meta;
type Story = StoryObj<typeof Vite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
