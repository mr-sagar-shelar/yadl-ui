import type { Meta, StoryObj } from "@storybook/react";
import AiScript from "../AiScript";

const meta: Meta<typeof AiScript> = { title: "SkillSet/AiScript", component: AiScript };

export default meta;
type Story = StoryObj<typeof AiScript>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
