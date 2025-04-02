import type { Meta, StoryObj } from "@storybook/react";
import GTK from "../GTK";

const meta: Meta<typeof GTK> = { title: "SkillIcon/GTK", component: GTK };

export default meta;
type Story = StoryObj<typeof GTK>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
