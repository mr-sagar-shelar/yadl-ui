import type { Meta, StoryObj } from "@storybook/react";
import WindiCSS from "../WindiCSS";

const meta: Meta<typeof WindiCSS> = { title: "SkillSet/WindiCSS", component: WindiCSS };

export default meta;
type Story = StoryObj<typeof WindiCSS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
