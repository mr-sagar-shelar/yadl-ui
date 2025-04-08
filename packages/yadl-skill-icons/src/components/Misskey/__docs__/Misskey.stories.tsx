import type { Meta, StoryObj } from "@storybook/react";
import Misskey from "../Misskey";

const meta: Meta<typeof Misskey> = { title: "SkillIcon/Misskey", component: Misskey };

export default meta;
type Story = StoryObj<typeof Misskey>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
