import type { Meta, StoryObj } from "@storybook/react";
import Photoshop from "../Photoshop";

const meta: Meta<typeof Photoshop> = { title: "SkillIcon/Photoshop", component: Photoshop };

export default meta;
type Story = StoryObj<typeof Photoshop>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
