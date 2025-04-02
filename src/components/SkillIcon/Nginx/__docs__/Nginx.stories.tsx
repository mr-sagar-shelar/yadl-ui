import type { Meta, StoryObj } from "@storybook/react";
import Nginx from "../Nginx";

const meta: Meta<typeof Nginx> = { title: "SkillIcon/Nginx", component: Nginx };

export default meta;
type Story = StoryObj<typeof Nginx>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
