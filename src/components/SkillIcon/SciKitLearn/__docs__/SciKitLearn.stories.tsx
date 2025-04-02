import type { Meta, StoryObj } from "@storybook/react";
import SciKitLearn from "../SciKitLearn";

const meta: Meta<typeof SciKitLearn> = { title: "SkillIcon/SciKitLearn", component: SciKitLearn };

export default meta;
type Story = StoryObj<typeof SciKitLearn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
