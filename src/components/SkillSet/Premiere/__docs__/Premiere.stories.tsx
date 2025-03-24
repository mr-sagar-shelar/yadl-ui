import type { Meta, StoryObj } from "@storybook/react";
import Premiere from "../Premiere";

const meta: Meta<typeof Premiere> = { title: "SkillSet/Premiere", component: Premiere };

export default meta;
type Story = StoryObj<typeof Premiere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
