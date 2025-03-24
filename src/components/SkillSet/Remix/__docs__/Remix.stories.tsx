import type { Meta, StoryObj } from "@storybook/react";
import Remix from "../Remix";

const meta: Meta<typeof Remix> = { title: "SkillSet/Remix", component: Remix };

export default meta;
type Story = StoryObj<typeof Remix>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
