import type { Meta, StoryObj } from "@storybook/react";
import Markdown from "../Markdown";

const meta: Meta<typeof Markdown> = { title: "SkillSet/Markdown", component: Markdown };

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
