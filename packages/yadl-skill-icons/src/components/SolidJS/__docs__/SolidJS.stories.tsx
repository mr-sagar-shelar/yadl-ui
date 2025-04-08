import type { Meta, StoryObj } from "@storybook/react";
import SolidJS from "../SolidJS";

const meta: Meta<typeof SolidJS> = { title: "SkillIcon/SolidJS", component: SolidJS };

export default meta;
type Story = StoryObj<typeof SolidJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
