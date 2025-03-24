import type { Meta, StoryObj } from "@storybook/react";
import Fediverse from "../Fediverse";

const meta: Meta<typeof Fediverse> = { title: "SkillSet/Fediverse", component: Fediverse };

export default meta;
type Story = StoryObj<typeof Fediverse>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
