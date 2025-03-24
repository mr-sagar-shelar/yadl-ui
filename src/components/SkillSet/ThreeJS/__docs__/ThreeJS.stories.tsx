import type { Meta, StoryObj } from "@storybook/react";
import ThreeJS from "../ThreeJS";

const meta: Meta<typeof ThreeJS> = { title: "SkillSet/ThreeJS", component: ThreeJS };

export default meta;
type Story = StoryObj<typeof ThreeJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
