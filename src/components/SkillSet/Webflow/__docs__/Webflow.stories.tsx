import type { Meta, StoryObj } from "@storybook/react";
import Webflow from "../Webflow";

const meta: Meta<typeof Webflow> = { title: "SkillSet/Webflow", component: Webflow };

export default meta;
type Story = StoryObj<typeof Webflow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
