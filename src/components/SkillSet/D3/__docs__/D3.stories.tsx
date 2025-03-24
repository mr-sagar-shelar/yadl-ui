import type { Meta, StoryObj } from "@storybook/react";
import D3 from "../D3";

const meta: Meta<typeof D3> = { title: "SkillSet/D3", component: D3 };

export default meta;
type Story = StoryObj<typeof D3>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
