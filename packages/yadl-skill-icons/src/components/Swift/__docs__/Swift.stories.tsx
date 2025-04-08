import type { Meta, StoryObj } from "@storybook/react";
import Swift from "../Swift";

const meta: Meta<typeof Swift> = { title: "SkillIcon/Swift", component: Swift };

export default meta;
type Story = StoryObj<typeof Swift>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
