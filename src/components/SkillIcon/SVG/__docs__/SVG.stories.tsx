import type { Meta, StoryObj } from "@storybook/react";
import SVG from "../SVG";

const meta: Meta<typeof SVG> = { title: "SkillIcon/SVG", component: SVG };

export default meta;
type Story = StoryObj<typeof SVG>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
