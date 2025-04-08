import type { Meta, StoryObj } from "@storybook/react";
import Haskell from "../Haskell";

const meta: Meta<typeof Haskell> = { title: "SkillIcon/Haskell", component: Haskell };

export default meta;
type Story = StoryObj<typeof Haskell>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
