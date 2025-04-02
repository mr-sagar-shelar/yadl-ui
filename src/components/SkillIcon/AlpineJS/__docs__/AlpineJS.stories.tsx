import type { Meta, StoryObj } from "@storybook/react";
import AlpineJS from "../AlpineJS";

const meta: Meta<typeof AlpineJS> = { title: "SkillIcon/AlpineJS", component: AlpineJS };

export default meta;
type Story = StoryObj<typeof AlpineJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
