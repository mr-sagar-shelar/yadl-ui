import type { Meta, StoryObj } from "@storybook/react";
import Matlab from "../Matlab";

const meta: Meta<typeof Matlab> = { title: "SkillIcon/Matlab", component: Matlab };

export default meta;
type Story = StoryObj<typeof Matlab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
