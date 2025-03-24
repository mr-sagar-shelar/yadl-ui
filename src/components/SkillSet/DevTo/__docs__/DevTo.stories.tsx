import type { Meta, StoryObj } from "@storybook/react";
import DevTo from "../DevTo";

const meta: Meta<typeof DevTo> = { title: "SkillSet/DevTo", component: DevTo };

export default meta;
type Story = StoryObj<typeof DevTo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
