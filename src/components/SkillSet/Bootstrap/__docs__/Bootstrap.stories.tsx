import type { Meta, StoryObj } from "@storybook/react";
import Bootstrap from "../Bootstrap";

const meta: Meta<typeof Bootstrap> = { title: "SkillSet/Bootstrap", component: Bootstrap };

export default meta;
type Story = StoryObj<typeof Bootstrap>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
