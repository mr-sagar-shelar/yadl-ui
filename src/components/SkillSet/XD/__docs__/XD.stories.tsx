import type { Meta, StoryObj } from "@storybook/react";
import XD from "../XD";

const meta: Meta<typeof XD> = { title: "SkillSet/XD", component: XD };

export default meta;
type Story = StoryObj<typeof XD>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
